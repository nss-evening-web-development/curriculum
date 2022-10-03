---
title: 'Create an ERD'
date: "2022-09-01 08:00:00"
course: ''
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '👥 GROUP LEARNING'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 07 - Webpack, APIs, ERDs
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE
is_featured: true
---
You are given the following requirements for a simple database for the National Hockey League (NHL):

- the NHL has many teams
- each team has a name, a city, a coach, a captain, and a set of players, 
- each player belongs to only one team, 
- each player has a name, a position (such as left wing or goalie), a skill level, and a set of injury records, 
- a team captain is also a player, 
- a game is played between two teams (referred to as host_team and guest_team) and has a date (such as May 11th, 2017) and a score (such as 4 to 2).

Construct a clean and concise ER diagram for the NHL database. List your assumptions and clearly indicate the cardinality mappings as well as any role indicators in your ER diagram.

**Remember when using dbdiagram, the following are the symbols for relationships**

There are 3 types of relationships: one-to-one, one-to-many, and many-to-one

- `<:` one-to-many. E.g: `users.id < posts.user_id`
- `>:` many-to-one. E.g: `posts.user_id > users.id`
- `-:` one-to-one. E.g: `users.id - user_infos.user_id`
