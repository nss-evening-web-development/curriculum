---
title: 'Employee Handbook'
date: "2022-09-01 08:00:00"
path: '/c/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT
image: '../../../images/headers/python-logo.png'
category: C# - Week 00 - Onboarding
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE_TAGS
is_featured: true
---

Welcome to Bangazon! We are a software solution provider that focuses on creating personalized solutions for a diverse range of customers, including smaller companies and evolving start-ups. Our team, which was established by developers for developers, is entirely focused on providing our customers with exceptional problem-solving applications.

We are happy that you have chosen to join our group of inventive engineers that have a basic grasp of coding and who are constantly willing to learn new things and broaden their skill set. We provide a chance to work on numerous projects in a friendly setting where no two days are the same.

## Technologies and Tooling

These are some tools and technologies you will be working with during your time here:

* C#
* .NET
* ReactJS
* Postman
* SQL
* SQL Server

* [DOCUMENTATION](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)

## Support & Guidance

Three of our top Sr. Engineers will support you in any way they can. They are committed to giving you all the mentoring and direction you require while you construct the Bangazon Platform. This includes giving instruction on fundamental ideas, equipment, and practices. Additionally, they will give you guidance on how to use simple code examples that you will need for a bigger project.

They are here to assist you, but it is ultimately your responsibility to ensure that you are up to date on all topics.

***DISCLAIMER: The Senior Engineers are available to help you, but they are also working on their assigned projects with their development teams. If they are not leading a session, the best way to get in touch with them is through the GitHub Discussion Tickets in your cohort's category.***


<!-- Replace with Client side stuff here if there are -->
## Asking for Help

It will never be the Senior Engineer's responsibility to make sure you know everything you need to know. However, they will be there to assist you in making sure you have all the necessary resources to get there. At Bangazon, we use GitHub Discussion Tickets to make it simple for you to get assistance.

The guidelines for asking for help are as follows:

1. The ticket template must be followed for a discussion ticket to be reviewed by a senior.
1. A discussion ticket will be automatically pushed to the following meeting session if it is submitted 30 minutes before the class closes.
1. Discussion tickets will be reviewed in the order of submission.
1. It is standard for us to refrain from reviewing discussion tickets outside of meeting times.
1. Any direct messages sent to a senior engineer that are not personal or are code-related will be redirected. These should either be a discussion ticket or a slack message in the team channel.

## Team Make-Up

You will be assigned to a team of 4-5 other aspiring engineers on your first day. Though there is a possibility of internal transfers during your time at Bangazon, you should expect to spend the majority of your time with your first assigned team!

## Onboarding Timeline

### 12 Week Prep

Your team will have 12 weeks to prepare for your first project, which will be for one of our clients. During those 12 weeks, you will have training sessions, labs where you will have access to your seniors, individual projects, group projects, and everything else you will need to prepare for your client's project.

### Official Client Project

On Week 13, each of you will be given the specifications for an application that one of our clients has requested. The senior engineers will still be available to help you during that time, but will be less hands-on because you are expected to be officially onboarded by then! You will be even more responsible for reaching out for help at this time. If necessary, they will assist in scheduling engineer lead review sessions, and they will remain available to answer questions and discuss tickets when they become availible.

## Scrum Ceremonies

### Daily Stand Up

Every Monday, Tuesday, and Saturday, one of the seniors will attend a 15-minute team meeting to discuss your progress, provide guidance on what you plan to complete in the next 24 hours, and raise concerns about any obstacles that you are encountering.

The seniors are also in charge of ensuring that you have the resources you need to complete the work, as well as assisting you in overcoming any obstacles that may arise.

### Retrospective

Once your team has completed a project (see Definition of Done below), your team will conduct a [retrospective](https://www.mountaingoatsoftware.com/agile/scrum/sprint-retrospective) with a senior. Before attending your first retrospective, make sure to read the description.

<!-- ### Sprint Review (https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-review-meeting) -->

<!-- ### Sprint Planning https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-planning-meeting -->

## Expectations of Work

### Definition of Done

There is a very clear [Definition of Done](https://www.agilealliance.org/glossary/definition-of-done/) that you must adhere to. If you do not, your manager will not approve the project for deployment.

1. The project must be fully documented. This includes the following:
    1. Complete README that documents the steps to install the code, how to install any dependencies, or system configuration needed.
1. The project must be able to run fully, and without errors, on each teammate's system.
1. Fulfills every requirement.
1. Every line of code has been peer reviewed.
1. For projects that require unit testing, core functionality must be identified and have at least one test for each.

### Pull Requests

When you submit a pull request to the project repository, it should provide all of the information necessary for one of your teammates to verify its completeness.

#### Descriptions

The description that you provide should be comprehensive enough to...

1. Provide clarity to any potentially complex code.
1. Explain reasons behind organizational or architectual decisions you made.
1. Give context to what feature you were completing so that your teammate has a mental model before looking at the code.

#### Steps to Test

You must provide clear steps for any teammate to test the code.

1. System configuration.
1. 3rd party libraries that need to be installed.
1. Command line utilities to run.
1. If there is a UI component, give clear instructions for steps to perform in the UI, and what they should expect to see as the outcome of those steps.

#### Link to Feature Ticket

At the end of the PR description, you must provide a hyperlink to the ticket that contains a description of the feature you are working on.

## Coding Standards

We will be following the [Common C# Coding Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions). Here are the big tickets items. Please read the style guide for more information.

1. When naming public members of types, such as fields, properties, events, methods, and local functions, use pascal casing ("PascalCasing").

    ```cs
    bool is_valid = false;
    bool IsValid = true;
    ```
2. All classes and methods will be documented with summary, param and returns.
    ```cs
    /// <summary>
    /// Authenticates a user based on a username and password.
    /// </summary>
    /// <param name="username">The username.</param>
    /// <param name="password">The password.</param>
    /// <returns>
    /// True, if authentication is successful, otherwise False.
    /// </returns>
    public override bool Authenticate(string username, string password)
    ```
3. Four **spaces** for indentation.
4. C# is a strongly typed language. Every variable and constant has a type, as does every expression that evaluates to a value.

    ```cs
    int a = 5;
    int b = a + 2; //OK

    bool test = true;

    // Error. Operator '+' cannot be applied to operands of type 'int' and 'bool'.
    int c = a + test;
    ```
5. Using statements on seperate lines.
