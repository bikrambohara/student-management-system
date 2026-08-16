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

@app.get("/students", response_model = list[schemas.Student])
def get_students(db:Session=Depends(get_db)):
    return db.query(models.Student).all()

# red one student by id

@app.get("/students/{student_id}", response_model=schemas.Student)
def get_student_by_id(student_id:int, db:Session=Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student


# update student
@app.put("/students/{student_id}", response_model=schemas.Student)
def update_student(student_id:int, student:schemas.StudentUpdate, db:Session=Depends(get_db)):
    existing_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not existing_student:
        raise HTTPException(status_code=404, detail="Student not found")

    existing_student.name = student.name
    existing_student.email = student.email
    existing_student.phone = student.phone
    existing_student.address = student.address
    existing_student.date_of_birth = student.date_of_birth
    existing_student.gender = student.gender
    existing_student.semester = student.semester
    existing_student.program = student.program
    existing_student.enrollment_date = student.enrollment_date
    existing_student.status = student.status

    db.commit()
    db.refresh(existing_student)
    return existing_student


# delete student
@app.delete("/students/{student_id}", response_model=schemas.Student)
def delete_student(student_id:int, db:Session=Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id)
    if not student.first():
        raise HTTPException(status_code=404, detail="Student not found")

    student.delete()
    db.commit()

    return {"message": "Student deleted successfuly"}