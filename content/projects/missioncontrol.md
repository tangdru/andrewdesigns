---
title: "Mission Control"
eyebrow: "Facilitating synthetic biology execution"
summary: "Enterprise software designed for Ginkgo Bioworks to enable the execution of client-driven synthetic biology R&D projects."
category: "ux"
tags: ["uxui"]
org: "Ginkgo Bioworks"
year: 2024
order: 2
featured: true
description: "Mission Control at Ginkgo Bioworks: research, design and testing of enterprise software that lets project leads plan and track synthetic biology R&D."
thumbnail: "/images/home/homepage-missioncontrol-4.webp"
cover: "/images/home/homepage-missioncontrol-4.webp"
links: []
grid: {"text": "5/21", "mtext": "1/9"}
---

[Solution](#mcsolution) | [Results](#mcresults) | [Process](#mcprocess) | [Design](#mcdesign) | [Testing](#mctesting) | [Metrics](#mcmetrics)

## Challenge

### End user

Project Leads (PL’s), who are responsible for leading the scientific effort and the success of reaching client goals and deliverables.

### The problem

- PL’s must plan their hypothesis into organized distinct scientific tasks to reach client deliverables in a spreadsheet to enable the business to capacity plan and forecast.

- PL’s then must use a separate order management system to place orders to various internal labs to run experiments; experiments can be stand-alone and non-dependent or strung together into modules where downstream experiments are dependent on upstream results. Also depending on the exact parameters of an experiment and time considerations, experiments are often run in parallel.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/missioncontrol/screenshot-2024-06-11-at-3-42-25-pm.webp" alt="Bar chart of survey respondents&#x27; tool usage, 23Q3 versus 24Q1" width="2000" height="769" loading="lazy" decoding="async"></figure>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/image--2.webp" alt="Project planning spreadsheet used by project leads" width="2000" height="1123" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/image--3.webp" alt="Servicely order management system requester dashboard" width="2000" height="1005" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:1/2">

Planning spreadsheet

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:3/4">

Order management system

</div>

</div>

- PL’s then must track the progress of their individual orders within the same ordering system using a table which displays all of the orders across all the active projects across the whole company.

- Each internal lab has different formats of data to return and are stored in various software around the Ginkgo environment.

- Each project can include an average of 4 deliverables, each deliverable can contain many modules. Modules have many tasks and each task can be associated with many experimental orders.

### Goal

- Decrease the time spent for PL’s during the execution stage of a project spent on ordering and tracking the progress of orders.

- Decrease the time spent searching for data files from internal labs.

- Decrease back-and-forth communication.

- Increase the time PL’s can spend on actual analysis of scientific results and running more projects.

- Currently a single PL can oversee 1-3 projects at time, Mission Control will allow Ginkgo Bioworks to scale with the goal of PL’s overseeing +10 projects at a time.

<a id="mcsolution"></a>

<hr>

## Solution

A single view where Project Leads can see their project plans along side the orders of experiments that are running in the lab or queued up. Before Mission Control, this would be a manual process for PL’s to keep track of the progress of all the lab experiments to compare with the planned timelines, and then would have to make adjustments in two different places if there was a delay.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:97.86%"><img src="/images/missioncontrol/mc-projectpage-2-drop.webp" alt="Mission Control project page with an order panel expanded" width="2000" height="1185" loading="lazy" decoding="async"></figure>

The value added is a contextual view of all of the experimental orders, this enables the user to see upstream and downstream of a project and to see dependencies. Mission Control is able to read from the planning spreadsheet, so the back-end would be able to find and assign experiment orders to tasks to allow users to bulk create orders instead of manually searching and finding orders and placing them individually in the current system.

One surprise benefit we learned after the MVP was deployed, the interface gave a single view to the whole project team, as other members of the team would request orders and the MC interface automatically found and associated them to the correct task!

<div class="row placed">

<div style="--gc:5/9;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/mc-projectpage-5.webp" alt="Annotated Mission Control project page: navigation, workspace and order details" width="2000" height="1053" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:9/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:98.69%">

<figure><img src="/images/missioncontrol/mc-projectpage-1.webp" alt="Mission Control project page showing modules and linked orders" width="2000" height="1175" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/17;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:5/6;--mfw:98.69%">

<figure><img src="/images/missioncontrol/image--2-2.webp" alt="Mission Control development build of the project page" width="2000" height="1175" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:17/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:7/8;--mfw:98.69%">

<figure><img src="/images/missioncontrol/mc-projectpage-4.webp" alt="Mission Control &quot;Create orders for module&quot; bulk ordering panel" width="2000" height="1175" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/9;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:98.69%">

<figure><img src="/images/missioncontrol/mc-projectpage-6.webp" alt="Mission Control project page with orders grouped by module" width="2000" height="1175" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:9/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:98.69%">

<figure><img src="/images/missioncontrol/mc-projectpage-7.webp" alt="Mission Control project page with paused orders" width="2000" height="1175" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/17;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:5/6;--mfw:98.62%">

<figure><img src="/images/missioncontrol/mc-landing.webp" alt="Mission Control landing page with color-coded project cards" width="2000" height="1176" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:17/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:7/8;--mfw:98.62%">

<figure><img src="/images/missioncontrol/mc-landing-2.webp" alt="Mission Control &quot;Add project&quot; dialog" width="2000" height="1176" loading="lazy" decoding="async"></figure>

</div>

</div>

<hr>

<div class="row placed">

<div style="--gc:5/10;--gr:1/3;--mgc:1/9;--mgr:1/2">

### “This will **solve and remove a lot of the cognitive** workload for a PL.”

</div>

<div style="--gc:10/15;--gr:1/2;--mgc:1/9;--mgr:2/3">

### “This will **save me hours** every week”

</div>

<div style="--gc:15/21;--gr:1/3;--mgc:1/9;--mgr:3/4">

### “Instead of going into Servicely and creating orders individually, **this is a blessing**”

</div>

</div>

<a id="mcresults"></a>

<hr>

## Results

### Metrics

#### 1 Week after MVP release

- 50 out of 151 active projects have opted into using the Mission Control interface

#### 1 Month after MVP release

- 71 projects out of 151 active projects have opted into using the Mission Control interface, with projects spanning across different domains: microbial, agricultural, and mammalian

- 49 unique PL’s have onboarded their projects

- 48 unique customer projects are now being tracked on Mission Control

#### Web stats

- Unique users: 110

#### Unique users: 110

- Session trends: 18.9% increase (rolling average)

- Users trends: 14.3% increase (rolling average)

- Funnel tracking of order creation: 78% conversion rate with average time of 24 seconds.

#### Learnings

- Staying aligned to project timelines and mitigating any deviation from the estimated timeline is a huge pain point for PL’s when managing client driven projects. There are many steps along the process where delays can occur, we’ve only address a handful in our MVP and have seen added value for our users. The team will uncover more points of delay once they start to integrate with other pieces of internal software to give the PL’s this single view of executing a project.

- Planning and execution of scientific projects go hand-in-hand. Downstream parts of a project rely on upstream parts to produce positive results or the remaining plan must change. So it’s hard to isolate execution from planning and there is still a need to go back and forth between the two pieces of software that enable each step. The team must reach parity in the Mission Control tool with the current planning processes if it wants to build an all inclusive tool for the PL’s.

#### Next steps

- Design an Alerts and Notifications user experience to focus the PL’s attention to the area of most need.

- Integrate Mission Control with other pieces of internal software a PL must interact with for project execution and learn what are the essential pieces of information a PL needs to make decisions for each integration.

- Remove the burden for the PL of having to navigate many pieces of software to find resources associated with a project: non-standard forms of communication, resources and documents, and data returns.

- Keep iterating on the design to be able to surface all valuable information in the UI while balancing information hierarchy and clutter.

<a id="mcprocess"></a>

<hr>

## Process

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/missioncontrol/mc-process.webp" alt="Process steps: discovery, define, ideate, test, design" width="2000" height="549" loading="lazy" decoding="async"></figure>

### Team

2 Project managers, 1 Engineering manager, 5 Engineers, 1 Designer

### User research: Workshop

Initial discovery research goal was to define a consensus workflow that mapped out the process and steps of a synthetic biology DBTL (Design, Build, Test, Learn) cycle, this would simulate a single module of work. I ran multiple workshops that include 3-4 PL’s each. The format of the workshop was for each PL to spend a few minutes mapping their own steps of tasks, communication needs and software needs for each step through a the cycle. Then the group would come together to create an agreed upon workflow, this step was for the purpose of capturing all the use cases and identifying where in the process PL’s needed to complete similar tasks.

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/image.webp" alt="DBTL cycle and workflow diagram from the workshop" width="2000" height="1134" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/3;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/image--6.webp" alt="Workshop board of sticky notes mapping a project lead&#x27;s steps" width="2000" height="1125" loading="lazy" decoding="async"></figure>

</div>

</div>

Workshop template

<div class="row placed">

<div style="--gc:5/12;--gr:2/4;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:33.56%">

<figure><img src="/images/missioncontrol/dbtl-1.webp" alt="Project lead DBTL cycle processes captured on sticky notes" width="2000" height="3456" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/3;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:46.19%">

<figure><img src="/images/missioncontrol/image--7.webp" alt="User flow captured from a project lead" width="1480" height="1858" loading="lazy" decoding="async"></figure>

</div>

</div>

Grouped DBTL cycle

Project lead DBTL cycle processes

What we learned is that PL’s spent a lot of their time communicating with individual lab members running their “Ordered” experiments to define the work, to check on progress and status, to find relevant information or data and to discuss the quality of the work.

### Obtained further evidence to support:

- There were many forms of communication

- The project information was lost in the noise

- The project information was hard to find

### New findings:

- There was more communication needed with the labs than previously known

- There was more prep work for PL’s to work with each lab and to handoff data between labs

- Identified specific pain points for scheduling work and handing off work

I then created a very simplified workflow of the DBTL process and outline what parts of the Mission Control tool could apply and add value to the process.

<figure class="placed" style="--gc:7/19;--fw:100.0%;--mgc:1/9;--mfw:48.9%"><img src="/images/missioncontrol/image--5.webp" alt="Simplified workflow showing where Mission Control adds value before, during and after a request" width="1346" height="1596" loading="lazy" decoding="async"></figure>

### Focused interviews

For the next round of research I wanted to focus in on a single order to answer questions of the specific types of the information that a PL’s needs during the execution phase and when they need it. PL’s, themselves have informational needs when running a project but they are a central hub at Ginkgo, so they’re responsible for reporting out project status to many parts of the company. So, I focused the questions around information needs for themselves, the immediate team and for teams across the organization and what are the specific need for each team.

I also wanted to learn about more of the temporal context of these needs, what information is needed before, during and after the execution of an order. This will inform what the UI should surface and display and when, to only display the most essential information so we’re not cluttering the interface with too much noise.

#### Demographics

- 8 Projects Leads (PL’s)

- Some PL’s who worked on project independently, some PL’s led a team, some PL’s were parts of other teams, and a combination of all 3.

- The range of currently managed projects were between 2-4.

- The range of experience was between 17-126 months at Ginkgo.

#### Analysis

The analysis consisted of tagging all the hour long interviews with the existing team defined research tags but I also added some custom tags to keep track of specific needs from our Project managers.

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/dovetailinterview1.webp" alt="Tagged interview transcripts in Dovetail" width="2000" height="926" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/image--25.webp" alt="Pain points grouped from interview analysis" width="1006" height="1373" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:3/4">

Example of a tagged interview

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:1/2">

Capturing PL’s user flow

</div>

</div>

### Synthesis

#### How Project Lead’s defined their role

- Managing the information flow between people

- My role is to enable the other people to do what they're supposed to do

#### Current consensus workflow

#### After importing all the tagged statements onto a board, I started to aligning the tagged statements from each user to start to map out their user flows. I then created a current consensus workflow.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/missioncontrol/userflow2.webp" alt="User flow diagram" width="2000" height="358" loading="lazy" decoding="async"></figure>

I then asked all the users that I interviewed to review the workflow to see if I captured everything correctly and asked if they would make edits or add comments. I also asked the users to define where in the workflow delays might occur and the types of delays that regularly happen. I then created a current consensus workflow to share with the team.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/missioncontrol/userflow-consensus.webp" alt="Current consensus workflow" width="2000" height="506" loading="lazy" decoding="async"></figure>

Then I mapped on top of the workflow the most common delay and the steps need to remedy the issue.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/missioncontrol/userflow-delay1.webp" alt="Consensus workflow with the most common delay and remedy steps highlighted in red" width="2000" height="743" loading="lazy" decoding="async"></figure>

I then mapped out all the steps in the workflow where a delay can occur to show the points of risk.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/missioncontrol/userflow-risk.webp" alt="Workflow with every point of delay marked in red" width="2000" height="490" loading="lazy" decoding="async"></figure>

Next, I synthesized the user needs and pain points and mapped the themes along the workflow, here are a few examples I highlighted for the team.

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/painpoints.webp" alt="Pain points grouped by theme" width="2000" height="798" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/userneeds.webp" alt="User needs grouped by theme" width="2000" height="590" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:1/2">

Analysis of Pain points

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:3/4">

Analysis of user needs

</div>

</div>

#### User needs

- Gauging process against the estimated timeline

- Mitigating risk against timelines

- Visibility into lab-to-lab hand-offs

- A single repo to collect project information for future reference

#### Pain points

- Unpredictable turn around times

- No notification of delays

- Hard to keep planning spreadsheet and order management system in sync

- Hard to see discrepancies between spreadsheets and order management system

<a id="mcdesign"></a>

<hr>

## Design

The benefit of having internal users is that I’m able to quickly get user feedback, from early concepts and wireframes to high fidelity designs. I can review with users and then draft recommendations and concepts to meet with the engineering team to see what solutions are viable, balancing value and development cost.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/missioncontrol/group-19.webp" alt="Early concepts and wireframes" width="2000" height="1134" loading="lazy" decoding="async"></figure>

Early concepts of thinking through validations of hand-offs between labs as I/O needs.

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-1076.webp" alt="Status glyph concepts: progress bars against deadlines" width="1399" height="961" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-133.webp" alt="Concepts for the information shown on an order" width="2000" height="1270" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:1/2">

Early visualization glyph concepts for scan-ability of progress.

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:3/4">

Concepts of what information would be useful for an order.

</div>

</div>

<div class="row placed">

<div style="--gc:5/9;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:7/8;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-954.webp" alt="Grid of early wireframes" width="2000" height="3377" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:9/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:63.7%">

<figure><img src="/images/missioncontrol/group-6.webp" alt="Order detail designs for a campaign" width="2000" height="1821" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/17;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-834.webp" alt="User flow of simple scientific workflows" width="2000" height="640" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:17/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:5/6;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-835.webp" alt="Overview of Mission Control user flow screens" width="2000" height="640" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:1/2">

Starting to visually refine an “Order” and the informational needs.

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:3/4">

Testing what simple scientific workflows would visually look like with considering of screen dimensions and experience.

</div>

</div>

<div class="row placed">

<div style="--gc:5/9;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:5/6;--mfw:61.75%">

<figure><img src="/images/missioncontrol/group-1069.webp" alt="Wireframe exploration of order cards and dependencies" width="2000" height="1878" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:9/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:7/8;--mfw:61.54%">

<figure><img src="/images/missioncontrol/group-1260.webp" alt="Navigation refinements across screens" width="2000" height="1885" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/17;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-893.webp" alt="Early Mission Control dashboard with active missions" width="1208" height="1722" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:17/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-1068.webp" alt="Refined navigation with deliverables in a side panel" width="1200" height="1000" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:3/4">

Decided on a vertical view to avoid horizontal scrolling and applying it to the workspace.

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:1/2">

Refining navigation.

</div>

</div>

<div class="row placed">

<div style="--gc:5/9;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-1075.webp" alt="Clickable prototype for A/B testing, annotated in red" width="1208" height="1305" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:9/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:4/5;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-936.webp" alt="Interaction and functional requirement specs" width="2000" height="1407" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/17;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:2/3;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-890.webp" alt="Order states with annotations" width="1289" height="2628" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:3/4">

Exploring interactions within the workspace and interactions for an “order”

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:1/2">

Further refinement of informational needs for each order with dependencies on temporal context.

</div>

</div>

<div class="row placed">

<div style="--gc:5/9;--gr:1/3;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-840.webp" alt="Exploring validations for lab-to-lab hand-offs" width="2000" height="1581" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:9/13;--gr:2/4;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-841.webp" alt="Vertical workspace layout to avoid horizontal scrolling" width="2000" height="2646" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/17;--gr:2/4;--fw:100.0%;--mgc:1/9;--mgr:5/6;--mfw:100.0%">

<figure><img src="/images/missioncontrol/group-842.webp" alt="Workspace interaction explorations" width="2000" height="4277" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--mgc:1/9;--mgr:3/4">

Defining the user interactions and functional requirements.

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:1/2">

Example of building out a clickable prototype for A+B testing.

</div>

</div>

<a id="mctesting"></a>

<hr>

## Testing

Here are two examples of the types of user testing we ran pre and post release of the MVP. We ran UAT sessions beforehand to test the use cases that we had designed and to get feedback to see if we missed any edge cases that would be essential for success of the MVP.

### Pre-release UAT

#### Use cases

- As a Program Lead, when I open my project page, I can see all deliverables and modules defined in my PPSS in that workspace, reflecting the ordering of these rows in my PPSS. I can see both the row name and module selection (for module rows) for these deliverables and modules.

- As a Program Lead, I can view all Servicely orders associated with a module via the Project Plan Linkages section of Servicely orders. Any orders directly associated to an offering row are visible under that row in Mission Control. I can find and click on the Servicely link to any module/offering-row associated order in Mission Control.

- As a Program Lead, I can save time by creating orders through Mission Control and relying on it to automatically filled in both the module and offering fields of the Project Plan Linkage section of Servicely orders.

- As a Program Lead, I can quickly identify if there are Servicely orders associated with the module that do not have an offering row association and take action in MC to add that association.

#### Session

- We watched users run through the use cases

- Noted if users Passed or Failed, then asked for feedback and comments

- Then asked for an overall Go/No Go - Pass/Failed assessment

We got the Ok to release the MVP if we added some minor interactions, such as fixing terminology, giving the users the ability to hide paused orders, and visually adding an hierarchy group to the view.

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/uat-2.webp" alt="Pre-release UAT spreadsheet of use cases with pass/fail results" width="2000" height="1189" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/uat-3.webp" alt="UAT results with overall go/no-go assessment" width="2000" height="1153" loading="lazy" decoding="async"></figure>

</div>

</div>

#### Post-release Usability

The usability sessions are a team effort, everyone is invited to participate to increase empathy for the user throughout the team and also during the synthesis session we can come to agreement for post release development quicker.

- We ran the user through similar use case as the UAT test, and everyone jotted down notes in the spreadsheet. BlockersOther errors, struggles, & pain pointsOpportunitiesObservations & other relevant things you saw the participant do or talk aboutPositive comments, task successes, and other things that went well

- Blockers

- Other errors, struggles, & pain points

- Opportunities

- Observations & other relevant things you saw the participant do or talk about

- Positive comments, task successes, and other things that went well

- We then took all the individual notes and synthesized into high levels

- We took the pain points themes and mapped them on a grid of Impact vs Effort

- The last step was to come up with solutions for each of the pain points.

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:89.37%">

<figure><img src="/images/missioncontrol/usability-1.webp" alt="Post-release usability notes spreadsheet" width="2000" height="1298" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/usability-2.webp" alt="Usability findings grouped and themed" width="2000" height="842" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:100.0%">

<figure><img src="/images/missioncontrol/usability-3.webp" alt="Pain points plotted on an impact versus effort grid" width="2000" height="1316" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:3/4;--mfw:100.0%">

<figure><img src="/images/missioncontrol/usability-4.webp" alt="Possible solutions mapped to pain points" width="2000" height="895" loading="lazy" decoding="async"></figure>

</div>

</div>

<a id="mcmetrics"></a>

<hr>

## Metrics

I then configured a *Fullstory* dashboard to capture key metrics, we also added inline tags on buttons and links to track specific interactions.

<div class="row placed">

<div style="--gc:5/13;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:51.04%">

<figure><img src="/images/missioncontrol/fullstory-mc.webp" alt="Fullstory dashboard: unique users, sessions and active time" width="2000" height="2272" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--fw:100.0%;--mgc:1/9;--mgr:2/3;--mfw:51.11%">

<figure><img src="/images/missioncontrol/fullstory-mc-2.webp" alt="Fullstory dashboard: order creation funnel and Mission Control actions" width="2000" height="2269" loading="lazy" decoding="async"></figure>

</div>

</div>
