from fastapi import FastAPI,Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine,SessionLocal
import  models,schemas


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

#DB dependency
def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

# home
@app.get("/")
def home ():
    return {"message": "student API started"}

# create student
@app.post("/students", response_model=schemas.Student)
def create_student(student:schemas.StudentCreate, db:Session=Depends(get_db)):
    new_student = models.Student(
        name=student.name,
        email=student.email,
        phone=student.phone,
        address=student.address,
        date_of_birth=student.date_of_birth,
        gender=student.gender,
        semester=student.semester,
        program=student.program,
        enrollment_date=student.enrollment_date,
        status=student.status

    )
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student


# read all students

