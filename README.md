How would your tables and apis change for the following scenarios. What tables and api endpoints would you add? Which tables and api endpoints would need to be updated?

If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed

\*\*Answer - We can create or change the schema for example in mongoDB we can add schema `stages` which will store fields like StageID, BoardID, Name, Position

API ENDPOINTS - GET / POST / PUT
1 GET - to get back all the stages of board
2 POST - to create a new Stage
3 PUT - To Update the existing board with different name/Position

Error Handing -
1 - Will be using Try Catch method to catch the error in efficient manner
2- we can handel reponses in apropriate status code and display error accodringly
3- also adding validation functions to check if board already exisit or not

If users can comment on tasks

Answer - same as board we can create a new schema which will have taskID, commentID, userID, content, timestamp

and we can use GET / POST / PUT | PATCH / DELETE for api endpoints to update the same

How will you do error handling?
i will make sure by checking if comment is dont to nonexsisting task and return error
also impliement authorization to insure the only valid users can comment on task
proper status code will allow us to make required changes in frontend as well
valdiation of input to make sure that we cant inject HTML JS code
