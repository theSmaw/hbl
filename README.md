https://us04web.zoom.us/j/75063423331?pwd=QlNPUSt4M1dKK1ZGUU9xSGF6RDlzdz09

## Getting started 

### Installation

```bash
npm install
```

### Server

```bash
npm run server
```

### Client

```bash
npm start
```

### Automated testing

#### Unit

```
npm test:unit
```

#### End to end

```
npm test:e2e
```

## Spec

Build an app to allow schools to deliver home-based lessons to students.

The app should comprise:

#### Schedule

 - show a schedule of lessons for the week
   - timing of the lesson
   - lesson type
   - teacher
 - allow the student to click into and participate in a lesson
 
 #### Lesson
 
  - should show lesson metadata
  - should show lesson content
  - should allow students to view questions and submit their answers and get feedback
  - we only need to implement for lesson-1 for now, although it would be great if our solution allows us to easily implement other lessons
  
  #### The following APIs are available:
  
    - GET http:/localhost:3001/lessons/monday
    - GET http:/localhost:3001/lessons/tuesday
    - GET http:/localhost:3001/lessons/wednesday
    - GET http:/localhost:3001/lessons/thursday
    - GET http:/localhost:3001/lessons/friday
    - GET http:/localhost:3001/lesson/lesson-1
    - POST http:/localhost:3001/quiz/quiz-1
    
  ## Non-functional requirements
    
   - the app should look good and appeal to both students and teachers
