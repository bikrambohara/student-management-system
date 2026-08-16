from pydantic import BaseModel


# Input schema
class StudentCreate(BaseModel):
    name: str
    email: str
    phone: str
    address: str
    date_of_birth: str
    gender: str
    semester: int
    program: str
    enrollment_date: str
    status: str = "Active"


# Update schema
class StudentUpdate(BaseModel):
    name: str
    email: str
    phone: str
    address: str
    date_of_birth: str
    gender: str
    semester: int
    program: str
    enrollment_date: str
    status: str


# Output schema
class Student(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    address: str
    date_of_birth: str
    gender: str
    semester: int
    program: str
    enrollment_date: str
    status: str

    class Config:
        from_attributes = True