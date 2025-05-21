from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://alertfi_db_ytvx_user:P9NMr3B2iY1QeZ6Q3aAjKuwzDl0eZt07@dpg-d0m1m915pdvs738qkrf0-a/alertfi_db_ytvx"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()
