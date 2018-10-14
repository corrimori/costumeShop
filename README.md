# costumeShop
Create a Costume Shop API from scratch

<b>Costumes</b><br>
ID: (You Choose) A unique id that represents the costume. Created automatically.
Name: (String) Name of the costume. Required.
Price: (Number) Price of the costume. Cannot be less than 1 cent. Required.
Description: (String) A description of the costume. Optional.
Tags: (Array) An array of tags.

<b>Tags</b><br>
ID: (You Choose) A unique id that represents the tag. Created automatically.
Name: (String) Name of the tag. Cannot be longer than 10 characters. Required.
Color: (String) A color to be associated with the tag. Must be a valid hex color code (e.g. #123456). Optional.
Tags will have different IDs even if they have the same name and color.

Built RESTful routes:
Create, Read, Update, and Delete costumes
Create, Read, Update, and Delete tags
Read tags through costumes
