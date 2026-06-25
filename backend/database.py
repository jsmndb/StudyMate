try:
    import mysql.connector as mysql_connector
except ImportError:
    import importlib
    mysql_connector = importlib.import_module("pymysql")

def get_db_connection():
    return mysql_connector.connect(
        host="localhost",
        user="root",
        password="",
        database="studymate"
    )