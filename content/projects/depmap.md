---
title: "Dependency Map"
eyebrow: "Cancer target discovery"
summary: "A data portal to share analysis and discovery of biomarkers for cancer therapeutics."
category: "ux"
tags: ["uxui", "dataviz"]
org: "Broad Institute"
order: 1
featured: true
description: "Designing the DepMap portal at the Broad Institute: a data portal for exploring cancer dependencies and discovering biomarkers for cancer therapeutics."
thumbnail: "/images/home/homepage-depmap-3.webp"
cover: "/images/home/homepage-depmap-3.webp"
cover_video: "/videos/depmap/portal-release.mp4"
cover_video_label: "DepMap portal release video: tour of the portal"
links: [{"label": "DepMap portal", "url": "https://depmap.org/portal/"}]
---


## The background

The Cancer Data Science group within the Broad Institute have continuously sequenced thousands of cancer cell line ranging in 67 different cancer types with 40% of lines categorized as rare or pediatric cancers. The group has developed an ML algorithm to accurately predict the dependency of these cancer cell lines to specific genes coining the name “The Cancer Dependency Map” (DepMap). These dependent genes in theory would be targets for therapeutics and successfully knocking out these specific genes without harming the target tissue can essentially limit the growth of the cancer. The team is regularly increasing the number of samples and rerunning the sequencing of all the cell lines quarterly to gather longitudinal data to inform the algorithm and to continuously release the data to the cancer research community.

<figure><img src="/images/depmap/screenshot-2024-06-10-at-9-41-55-am.webp" alt="Diagram of data sources feeding the Cancer Dependency Map: CCLE, TCGA, PRISM, Achilles, Sanger and Novartis" width="2000" height="1809" loading="lazy" decoding="async"></figure>

### The challenge

The team produces terabytes of data, and the value is the analysis that makes the data accessible, and the normalization across the cell lines makes them comparable. So the team wanted to create a data portal of precomputed data and analysis to present to the community, including analytic tools to browse and discover the data set.

I was brought onto the team as the sole designer to help design the portal and it’s interactive data visualization tools but since there was no portal at the time, and I also designed the architecture and created the branding.

My design priorities were:

- Accurately portray the scientific data.

- Balancing high level lookups for easy access to the data and analytic tools for deep dives into the data analysis.

- Balancing Searchability vs Browsability

- BONUS 1: Mobile friendly

<hr>

## The Solution

The main use case is that a user comes to the portal with a *Gene* in mind and they enter into the search bar. The primary interaction for the user is the following gene page.

- Each analysis is separated onto it’s own card.

- The cards are organized by user needs and associated data.

- Each card gives a summary of the data through the lens of the users’ gene of interest ie., here’s the data for your gene of interest and here’s the comparison to the rest of the population.

- The cards serve several purposes. A high level summaryAn entry into an analytical tool for a deeper diveThey are mobile friendly They are repurposed for tertiary information on the analytic tools pages for supporting data and cross linking to increase browsability.

- A high level summary

- An entry into an analytical tool for a deeper dive

- They are mobile friendly

- They are repurposed for tertiary information on the analytic tools pages for supporting data and cross linking to increase browsability.

<figure><img src="/images/depmap/screenshot-2024-06-10-at-10-14-39-am.webp" alt="DepMap gene page for BRAF with dependent cell lines, enriched lineages, expression and predictability cards" width="2000" height="1943" loading="lazy" decoding="async"></figure>

The user enters this page through a search bar when searching for a gene of interest. This is a “gene” page and it contains all of the data that Depmap team has on a gene of interest. The cards will vary depending on the available data.

<figure><img src="/images/depmap/cards.webp" alt="Overview of the gene page card layout" width="2000" height="680" loading="lazy" decoding="async"></figure>

Here are the available cards, they are ordered on the page from left-to-right and top-to-bottom. The top-left card is the primary dataset for the portal, it’s the “Dependency score”. The order of all other cards are defined by user needs of supporting data, so the user can increase their confidence and trust in the dependency score.

<figure><img src="/images/depmap/depmaphome.webp" alt="DepMap portal home page: &quot;Explore the Cancer Dependency Map&quot;" width="2000" height="1553" loading="lazy" decoding="async"></figure>

The landing page for the portal give users many points of entry into the data itself. Users that know exactly where to go would be able to search for a gene, cell line, compound or lineage. New users would be able to quickly scan the “Use this portal to:” section to identify what tools and analysis are available on the portal and click through to see examples.

<div class="row gallery cols-2">

<div>

<figure><img src="/images/depmap/screenshot-2024-06-10-at-11-04-59-am.webp" alt="Data Explorer scatterplot comparing two variables across cancer cell lines, with filter controls" width="2000" height="1221" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/depmap/screenshot-2024-06-10-at-11-02-17-am.webp" alt="Perturbation effects tab: box plots of BRAF gene effect by cancer lineage" width="2000" height="1937" loading="lazy" decoding="async"></figure>

</div>

</div>

<figure><img src="/images/depmap/screenshot-2024-06-10-at-11-02-44-am.webp" alt="Predictability tab: tables of the most predictive features for BRAF across models" width="2000" height="1689" loading="lazy" decoding="async"></figure>

Here are some examples of the deep dive tools available on the portal, user would enter into these tools either through the data cards or through the tools dropdown menu. Entering a tool through a data card would automatically populate the tool with the analysis defined from the card. Entering a tool through the dropdown menu, the user will will need to define the parameters themselves.

<div class="row gallery cols-2">

<div>

<figure><video controls preload="none" playsinline width="1280" height="720" poster="/videos/depmap/violin-plots.webp" aria-label="Screen recording: exploring gene effect with violin plots"><source src="/videos/depmap/violin-plots.mp4" type="video/mp4"></video></figure>

</div>

<div>

<figure><video controls preload="none" playsinline width="1280" height="720" poster="/videos/depmap/scatter-plots.webp" aria-label="Screen recording: exploring relationships with interactive scatterplots"><source src="/videos/depmap/scatter-plots.mp4" type="video/mp4"></video></figure>

</div>

</div>

In addition to written documentation that I would create, I also created quick “how-to videos” to help users get familiar with the tools. I would write the script and review with our computational biologist, then record the audio and screen interactions and compose the videos for the final product.

<hr>

## The process

<div class="row split cols-2">

<div>

<figure><img src="/images/depmap/process.webp" alt="Design process cycle: discover, design, develop, deliver, framed by synthesis and analysis" width="1320" height="1322" loading="lazy" decoding="async"></figure>

</div>

<div>

Here’s the iterative design process that I used for all of my Depmap portal work. 
 
Details process is down below.

- AT = Me

- CDS Stakeholder = Cancer Data Science computational biologist

</div>

</div>

<figure><img src="/images/depmap/screenshot-2024-06-07-at-4-11-42-pm.webp" alt="Process map of stakeholder inputs and outputs across discovery, design, develop and deliver phases" width="2000" height="2007" loading="lazy" decoding="async"></figure>

<figure><img src="/images/depmap/understanding-the-data.webp" alt="Understanding the data: original pipeline diagram and example UMAPs of pancreas and single-cell data" width="2000" height="1136" loading="lazy" decoding="async"></figure>

Researching the domain and understanding the data is usually the first step for me. I will meet with the content experts to comb through the analysis and data to understand what the shape of the data is to understand the metric that we’re presenting to the users.

<figure><img src="/images/depmap/screenshot-2024-06-10-at-11-38-08-am.webp" alt="Flow diagrams mapping data relationships for the portal" width="2000" height="1213" loading="lazy" decoding="async"></figure>

<figure><img src="/images/depmap/celfie---genomic-association---1250-fonts.webp" alt="Annotated wireframe of the Celfie genomic association tool for MDM2" width="1250" height="990" loading="lazy" decoding="async"></figure>

After meeting with the computational biologist to get a better understanding of the analysis and data behind the metric. I would start to map out all of the user requirements along a user flow and would prioritize our main use cases but build in interactions to solve edge cases. I would then start to map out the user interactions needed along the user flow.

<figure><img src="/images/depmap/wireframes.webp" alt="Grayscale wireframes of the genomic association tool with red annotations" width="2000" height="1887" loading="lazy" decoding="async"></figure>

Since these are all new analysis, I’ll start to create wireframes from the defined user flows and requirements. I’ll start with many ideas and will start to refine the design with consideration of development cost. At this point once I have a visual for users to react too, I’ll create clickable designs to start testing and getting feedback from our users. I will usually need to give background on the new analysis and what the value it brings to the portal.

<figure><img src="/images/depmap/visualizations.webp" alt="Three visualization explorations for the association tool, including a heatmap" width="2000" height="541" loading="lazy" decoding="async"></figure>

With feedback from our users I’ll refine the design of the UI, but during the same interviews I’ll ask questions regarding the interpretation of the visualization and data. I’ll then visualize the data in a few different forms to get feedback from our users to see which is the most intuitive when trying to understand a new dataset.

At this point after defining pain points and user needs and solving for the major use cases, I’ll start to refine the design to produce final design and a hand-off document to work through development with the engineers.
