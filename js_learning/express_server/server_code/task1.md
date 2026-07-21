Create an Express server with these routes:

GET /
Return: "Server Running"
GET /about
Return your name and role in JSON.

POST /feedback

Accept:
{
  "message":"Great app"
}
Return received data.
PATCH /user
Accept name update.
Return updated value.
DELETE /user
Return "User deleted". 