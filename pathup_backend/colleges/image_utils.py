"""
Automatic image optimization utilities for the Colleges app.
Handles resizing, WebP conversion, and compression for logos and gallery images.
"""
import os
from io import BytesIO
from PIL import Image
from django.core.files.base import ContentFile


def optimize_image(image_field, max_size=(400, 400), quality=85, is_logo=False):
    """
    Processes an uploaded image:
    1. Opens it with Pillow
    2. Converts to RGB (if needed for WebP compatibility)
    3. Resizes to fit within max_size while maintaining aspect ratio
    4. For logos: pads to a perfect square with a transparent background
    5. Saves as WebP format for optimal file size

    Args:
        image_field: Django ImageField instance (e.g., instance.logo)
        max_size: Tuple (width, height) maximum dimensions
        quality: WebP compression quality (1-100)
        is_logo: If True, pad to square with transparent background

    Returns:
        Tuple of (new_filename, ContentFile) ready to be saved, or None if no processing needed.
    """
    if not image_field:
        return None

    try:
        img = Image.open(image_field)
    except Exception:
        return None

    # Preserve transparency for logos (RGBA), convert to RGB for photos
    if is_logo:
        img = img.convert('RGBA')
    else:
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')

    # Resize to fit within max_size, keeping aspect ratio
    img.thumbnail(max_size, Image.LANCZOS)

    # For logos: pad to a perfect square with transparent background
    if is_logo:
        target_size = max(max_size)
        square = Image.new('RGBA', (target_size, target_size), (0, 0, 0, 0))
        # Center the logo on the transparent square
        offset_x = (target_size - img.width) // 2
        offset_y = (target_size - img.height) // 2
        square.paste(img, (offset_x, offset_y), img if img.mode == 'RGBA' else None)
        img = square

    # Save as WebP
    buffer = BytesIO()
    save_kwargs = {'format': 'WEBP', 'quality': quality}
    if is_logo:
        save_kwargs['lossless'] = False  # Lossy is fine for logos, much smaller
    img.save(buffer, **save_kwargs)
    buffer.seek(0)

    # Generate the new filename with .webp extension
    original_name = os.path.splitext(os.path.basename(image_field.name))[0]
    new_filename = f"{original_name}.webp"

    return new_filename, ContentFile(buffer.read())
