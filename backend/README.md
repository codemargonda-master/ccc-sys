# CodeCourseCamp System: Backend

This repo is created to manage all along the data structured, created databases, mailings, account and shows up the data into FrontEnd.

## Database Scheme

### Table of Account

Attribute for General Registration
```json
{
    "id" : 1,
    "name" : "Gungde",
    "email" : "test@email.com",
    "password" : "tested123"
}
```
Attribute for Registration Course
```json
{
    "birth_date" : "11-06-1996",
    "gender" : "male",
    "phone" : "6285772136367",
    "address" : "Jalan Margonda Raya",
    "city" : "Depok",
    "last_education" : "SMA",
    "tech_passionate" : "Beginning Learner",
    "batch_selected" : "Android Beginner Batch #3",
    "program_info" : "Facebook"
}
```

Merging from Attribute General and Registration Course
```json
{
    "id" : 1,
    "name" : "Gungde",
    "email" : "test@email.com",
    "password" : "tested123",
    "course" : 
        {
        "birth_date" : "11-06-1996",
        "gender" : "male",
        "phone" : "6285772136367",
        "address" : "Jalan Margonda Raya",
        "city" : "Depok",
        "last_education" : "SMA",
        "tech_passionate" : "Beginning Learner",
        "batch_selected" : "Android Beginner Batch #3",
        "program_info" : "Facebook"
        }
}
```

### Table of Course

Attribute for Course Schedule
```json
{
    "id" : 1,
    "class" : "Android",
    "level" : "Beginner",
    "test_date" : "24-06-2017",
    "start" : "30-06-2017",
    "end" : "1-08-2017",
    "status" : true
}
```

### Table of Subscribe Syllabus

Attribute for Subscribe Syllabus
```json
{
    "email" : "gunkdep@gmail.com"
}
```

### Table of Testimony

Attribute for Testimonial User
```json
{
    "id" : 1,
    "name" : "Gungde Aditya",
    "testimony" : "The best Course I'm ever attend!"
}
```

### Table of Faq

Attribute for Testimonial User
```json
{
    "id" : 1,
    "question" : "How to apply to the program ?",
    "answer" : "Simple, just open the website and read each of the entire step!"
}
```
