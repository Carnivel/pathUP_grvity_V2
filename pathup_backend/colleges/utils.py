def get_client_ip(request):
    """
    Utility func to reliably get client IP from Django requests, 
    respecting headers added by Cloudflare or generic proxy load balancers.
    """
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip
