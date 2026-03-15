import MySQLdb

def reset_database():
    print("Connecting to MySQL...")
    db = MySQLdb.connect(host="localhost", user="root", passwd="2006")
    cursor = db.cursor()
    print("Dropping database pathup_db...")
    cursor.execute("DROP DATABASE IF EXISTS pathup_db")
    print("Creating database pathup_db...")
    cursor.execute("CREATE DATABASE pathup_db")
    print("Database reset complete.")

if __name__ == "__main__":
    reset_database()
