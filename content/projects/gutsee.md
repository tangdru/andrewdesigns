---
title: "GutSee mobile app"
eyebrow: "IBD clinical trial mobile app"
summary: "Building user engagement for a longitudinal IBD clinical study."
category: "ux"
tags: ["uxui", "dataviz"]
org: "Broad Institute (CMIT) with Mass General Hospital"
year: 2021
order: 3
featured: true
description: "GutSee: a patient-facing app that helps IBD study participants submit samples, log symptoms, and see their own microbiome and Fitbit data."
thumbnail: "/images/home/homepage-gutsee-2.webp"
cover: "/images/gutsee/gutsee-home-1.webp"
links: []
---

## The background

The Center for Microbiome Informatics and Therapeutics (CMIT) is collaborating with Massachusetts General Hospital (MGH) in Boston, and the University Medical Center, Groningen, the Netherlands, on an observational longitudinal study with the goal of identifying early warning signs of IBD flare-ups. The study is set to monitor patients with either Crohn’s Disease or ulcerative colitis over the course of 12 months, patients are expected to contribute samples (stool, blood, and urine) and physiological and behavioral data from a Fitbit wearable device. The goal of the study is to identify early warning signs of IBD flare-ups.

We designed a patient-facing app called GutSee to help study participants **submit samples**, **record disease symptoms**, monitor **wearable device data**, and **visualize their own microbiome** sequencing results as they become available.

### Challenge

User Confidence

- Can users trust this tool with their medical data?

- How can design influence the notion of trust?

User Experience

- Does the app set the correct level of expectations for the user?

- How to keep users engaged for the whole trial period?

User Interface

- Can the app bring value to the users?

- Is the app easy to navigate?

- Can a user quickly fill out the IBD survey and submit a sample?

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-12-21-39-pm.webp" alt="Diagram: user interface informs user confidence, which shapes user experience and behavior" width="2000" height="1506" loading="lazy" decoding="async"></figure>

<hr>

## The results

<figure><img src="/images/gutsee/gutsee4.webp" alt="GutSee login, home and microbiome sample screens" width="1268" height="861" loading="lazy" decoding="async"></figure>

<figure><img src="/images/gutsee/gutsee-screens.webp" alt="Row of GutSee screens: sample instructions, questionnaire, Fitbit data and microbiome charts" width="2000" height="697" loading="lazy" decoding="async"></figure>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-2-06-35-pm.webp" alt="GutSee App Store listing with screenshots" width="2000" height="2729" loading="lazy" decoding="async"></figure>

<hr>

## The process

I first reviewed applications in this space as a competitive analysis. The main purpose of the app is to capture irritable bowel disease samples and symptoms at occurrence, track physiological data through a wearable device and return medical information to patients. I reviewed apps in three areas:

- IBD related apps - to learn what types of information is valuable for users of IBD apps

- Health tracking apps - to learn the level of data fidelity that would keep users engaged

- Medical patient facing apps - to learn the type of content and context to relate medical information to patients, and what literacy level we should be conveying this type of information.

<figure><img src="/images/gutsee/gutsee-apps.webp" alt="Survey of existing IBD, health tracking and patient-facing apps" width="2000" height="463" loading="lazy" decoding="async"></figure>

#### Branding

We ran a brain storming session across the team and with our collaborators, and create a word index to generate ideas.

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-12-22-06-pm.webp" alt="Naming exploration: word lists and candidate names, with GutSee highlighted" width="2000" height="1679" loading="lazy" decoding="async"></figure>

The name GutSee won by a few votes as Bowl Owl was a close second. From there I was able to design the logo and logotype for the app. The colors of the logo were taken from the colors of the center.

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-12-22-11-pm.webp" alt="GutSee logo, combining &quot;Microbiome&quot; and &quot;Observation&quot;" width="2000" height="1128" loading="lazy" decoding="async"></figure>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-12-22-16-pm.webp" alt="GutSee logo detail: the gut-shaped symbol mirrors the &quot;g&quot; and adds intestinal folds" width="2000" height="866" loading="lazy" decoding="async"></figure>

### The data

We had three types of data to record and return to the patients.

#### Survey data

The surveys themselves were medically reviewed and approved IBD standards, and depending on which study the patients were involved in dictated the survey that we would present to them. The surveys had to be filled out when there was a flare-up to capture data at the time of occurrence.

- Ulcerative Colitis, Simple clinical colitis activity index (SCCAI) survey

- Crohn’s Disease, Harvey-Bradshaw index (HBI) survey

#### Fitness data

Each patient received a *Fitbit* upon inclusion into the study group. We recorded specific types of physiological data defined by the clinicians.

- Number of steps

- Active time

- Resting HR

- Sleep time

#### Microbiome samples

Patients had to submit weekly samples to obtain a baseline for their microbiome, and in cases of flare-ups users would be request to submit additional samples to measure the bacteria during an occurrence.

- Abundance of bacteria per sample

<figure><img src="/images/gutsee/data.webp" alt="Comparison of survey, fitness and microbiome data by collection frequency and return time" width="2000" height="711" loading="lazy" decoding="async"></figure>

Returning data to the patients was the easy part, we can design any interface with any interactivity to answer all user needs. BUT the hard part was obtaining the data and the unknown frequency of it… how can we keep users engaged by returning useful data when we won’t know when we would have data to return? We can immediately return Fitbit data, but that’s the true value for our users. The true value was the data from the survey and microbiome samples, and these relied heavily on patient participation. On top of patient participation, the microbiome data to be cost effective for the lab running the study, we’d need to obtain 384 sample to sequence the samples. So for example if we had a minority of very involved patients and a majority of occasionally involved patients, the diligent patients will still need to wait for their data to be returned.

#### So how do you design for unpredictable user engagement?

We designed the app around the HOOKED Method of variable rewards:

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-1-47-39-pm.webp" alt="Hook model for engagement: trigger, action, variable reward and investment" width="2000" height="1013" loading="lazy" decoding="async"></figure>

From the onset of the development process, we request content from the researchers and clinicians, this would give us time to create enough content to deliver variable rewards until we would be able to return their own microbiome data to the users. We were just buying time to get enough samples to sequence the first run.

So the types of variable reward content we were writing:

- Microbe of the week - we mapped out a phylogenetic tree of all bacteria found in the human gut and create profiles for the top percentile of microbes.

- To get more value from all the work creating microbe profile, we plan on using snippets from the profiles for fun facts.

- We would link to papers that CMIT would publish

- We would also include alerts to any news on IBD

We also planned a timed-release of features, starting with on-boarding materials and then slowly introducing functionality and features of the application.

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-34-35-pm.webp" alt="Timeline of study weeks mapping when participants receive surveys, samples and results" width="2000" height="1617" loading="lazy" decoding="async"></figure>

<hr>

## The design

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-34-53-pm.webp" alt="GutSee V2 sitemap" width="2000" height="1494" loading="lazy" decoding="async"></figure>

Here’s an example of planning the site architecture to review with the stakeholders. Once we got the go ahead with the plan, and lots of sketching ideas with the team.

<div class="row gallery cols-2">

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-2-32-50-pm.webp" alt="Whiteboard sketch of the app&#x27;s information architecture" width="2000" height="2259" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/gutsee-whiteboard.webp" alt="Digital whiteboard of early concepts and screen sketches" width="2000" height="971" loading="lazy" decoding="async"></figure>

</div>

</div>

After initial sketches, time for digital sketches. Since this was mobile design, we had to familiarize ourselves with AppKit and touch interactions. We also experimented with light and dark modes and selected a color palette to visualize the data that would work independently from either of the modes and still pass accessibility test.

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-26-20-pm.webp" alt="Figma canvas showing the full set of GutSee screens" width="2000" height="1803" loading="lazy" decoding="async"></figure>

<div class="row gallery cols-2">

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-30-37-pm.webp" alt="Fitbit summary screen spec: rolling 7-day averages for steps, heart rate, active minutes and sleep" width="2000" height="1959" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-31-05-pm.webp" alt="Microbiome data screens: stacked bars across samples and a donut chart for one sample" width="2000" height="1873" loading="lazy" decoding="async"></figure>

</div>

</div>

<div class="row gallery cols-2">

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-30-43-pm.webp" alt="Data intake process document for Fitbit data, with highlighted responsibilities" width="2000" height="1238" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-31-15-pm.webp" alt="Data intake process document for microbiome samples, with an example record" width="2000" height="1592" loading="lazy" decoding="async"></figure>

</div>

</div>

I even designed the user experience of the on-boarding materials and explainers. My background as an illustrator came in handy and I was able to create all the graphics for the materials.

<div class="row gallery cols-4">

<div>

<figure><img src="/images/gutsee/how-to-submit-a-sample_1_collection.webp" alt="Illustration: stool collection device placed on a toilet seat" width="2000" height="1745" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/how-to-submit-a-sample_2_tubes.webp" alt="Illustration: sample tubes labeled P (with preservative) and N (without)" width="2000" height="1293" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/how-to-submit-a-sample_3_bag1.webp" alt="Illustration: specimen bag 1 with biohazard label" width="2000" height="3423" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/how-to-submit-a-sample_4_bag2.webp" alt="Illustration: specimen bag 2 with biohazard label and QR code" width="2000" height="3431" loading="lazy" decoding="async"></figure>

</div>

</div>

The developers and I spent a lot of time iterating through the visualizations. Here’s an example of the type of questions we were trying to answer.

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-33-40-pm.webp" alt="Design question: how many bars to show at once, beside a stacked bar chart screen" width="2000" height="1075" loading="lazy" decoding="async"></figure>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-33-49-pm.webp" alt="Design question: keeping colors consistent across samples for the top 7 bacteria" width="2000" height="1098" loading="lazy" decoding="async"></figure>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-33-54-pm.webp" alt="Design question: handling a bacterium not in the color map" width="2000" height="956" loading="lazy" decoding="async"></figure>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-34-01-pm.webp" alt="Design question: what the page looks like when a patient has not submitted data" width="2000" height="1133" loading="lazy" decoding="async"></figure>

Examples of visualizations ideas we tried for showing abundance of bacteria.

<div class="row gallery cols-3">

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-34-08-pm.webp" alt="Microbiome Overview as a stacked area chart" width="804" height="1510" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-34-08-pm-2.webp" alt="Microbiome Overview area chart variant with a muted palette" width="783" height="1510" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-35-05-pm.webp" alt="Exploring donut and bubble charts against the underlying family-level spreadsheet" width="1996" height="1954" loading="lazy" decoding="async"></figure>

</div>

</div>

The solution we decided on.

<figure><img src="/images/gutsee/screenshot-2024-06-10-at-3-34-14-pm.webp" alt="Bubble matrix concept with notes: not dependent on color, scalable, intuitive" width="2000" height="1032" loading="lazy" decoding="async"></figure>
