
from sqlalchemy import Column, Integer, String, ForeignKey, Text
from database import Base


# Student table
class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String)
    address = Column(String)
    date_of_birth = Column(String)
    gender = Column(String)
    semester = Column(Integer)
    program = Column(String)
    enrollment_date = Column(String)
    status = Column(String, default="Active")
