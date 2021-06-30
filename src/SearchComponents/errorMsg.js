export const error =[
'Android', 'Art', 'Artificial Intelligence', 'Astronomy',
'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 
'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 
'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 
'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 
'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 
'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 
'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 
'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 
'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 
'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 
'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 
'Web Development', 'iOS'
]
const Msg = 'search terms closed on '
// const errorMsg =  Msg.concat(...error)
const errorMsg =  Msg + [...error];
// const errorMsg =  Msg + error.toString();
// const terms = error.map(term => toString(term) );
// const errorMsg =  Msg + terms ;
export default errorMsg;