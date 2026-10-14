---
title: "Metastatic potential"
eyebrow: "Encoding metastatic potential"
summary: "Petal plots that encode both metastatic potential and penetrance for 500 cancer cell lines, featured on the cover of Nature."
category: "dataviz"
tags: ["dataviz"]
org: "Broad Institute"
year: 2020
order: 5
featured: true
description: "MetMap petal plots: encoding metastatic potential and penetrance of 500 cancer cell lines. Featured on the 10 December 2020 cover of Nature."
thumbnail: "/images/home/naturecover.webp"
cover: "/images/metmap/flower-field.webp"
links: [{"label": "Live visualization", "url": "https://depmap.org/metmap/vis-app/index.html"}, {"label": "Paper (Nature)", "url": "https://doi.org/10.1038/s41586-020-2969-2"}, {"label": "Nature Visuals post", "url": "https://medium.com/nature-visuals/fresh-data-plots-sprout-on-natures-latest-cover-40e1797c559a"}]
---

## The challenge

In the research paper by Xin Jin, he encoded metastatic potential using a radial plot; metastasis is the development of secondary malignant growths at a distance from a primary site of cancer. When Xin presented his work, we felt that this plot did not represent his data correctly, and didn’t full encode all the data from his research.

<figure><img src="/images/metmap/experiment.webp" alt="Experimental design: barcoded cell line pool injected into mice, measured per organ" width="2000" height="417" loading="lazy" decoding="async"></figure>

Here’s figure that represents the experimental design of the research. Various cancer cell lines were injected into specific organ sites and left to metastasize, at different time frames, the growth of the cancer was measured and sequenced to identify which of the original cancer lines has metastasized in other organs.

<hr>

## The problem

Using the radial plot, Xin was only able to encode only metastatic potential but not penetrance, but we felt that the plot didn’t fully capture the true shape of the data. Plus we wanted to be able to visualize both potential and penetrance metrics to get a true view of the research.

**Potential:**

DNA barcode abundance detected in each organ relative to the pre-injected population. Data are presented on a log10 scale, range from -4 ~ 4.

**Penetrance:**

Percentage of animals that the cell lines were detected via barcode sequencing. Data ranges 0~1.

<div class="row gallery cols-2">

<div>

<figure><img src="/images/metmap/1.webp" alt="Radar plot of metastatic potential for MDA-MB-231 across five organs" width="1932" height="1878" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/metmap/2.webp" alt="Radar plot for MDA-MB-231 with the area filled in red" width="1822" height="1794" loading="lazy" decoding="async"></figure>

</div>

</div>

Radial plots are generally used to create glyphs to convey related and not-so-related data and it’s hard to gauge the distinct value of each point, as the connections between the radial points create visual weight and viewers see the area as a whole instead of individual points of data.

<hr>

## The process

<figure><img src="/images/metmap/3.webp" alt="Grid of radar plots for six cell lines with penetrance as orange dots" width="2000" height="1270" loading="lazy" decoding="async"></figure>

At first we plotted all the data to get an idea of all the data we wanted to encode.

- Green = Potential along radial axis

- Green opacity = Potential error

- Yellow = Radius is penetrance

<figure><img src="/images/metmap/4.webp" alt="Grid of star-shaped radar plots for six cell lines" width="2000" height="1345" loading="lazy" decoding="async"></figure>

We then removed the connections between the data points, as the points were to represent individual organs and were not necessarily related. This removed the visual weight and you can see each of the individual points represented, but the visual weight and the users attention was drawn to the middle of the star shape.

<div class="row split cols-2">

<div>

<figure><img src="/images/metmap/5.webp" alt="Petal plot: one petal per organ, length showing metastatic potential" width="1328" height="1318" loading="lazy" decoding="async"></figure>

</div>

<div>

Next we removed all the visual weight from the center of the star glyph and encoded penetrance to the radius of the data point.

At this point we were happy with the solution so far, we were able to see each point as an individual that originated from a central point. We have encoded potential on the radial axis and penetrance in the radius of the data point.

</div>

</div>

<figure><img src="/images/metmap/6.webp" alt="Small multiples comparing radar and petal plots across many cell lines" width="2000" height="994" loading="lazy" decoding="async"></figure>

We plotted the new concept along side the original radial plot to compare and use these graphics to test our visualization with users.

<hr>

## The solution

<figure><img src="/images/metmap/7.webp" alt="Petal plot legend: petal length for metastatic potential, width for penetrance, with 95% confidence interval" width="2000" height="1524" loading="lazy" decoding="async"></figure>

After testing with a few groups, we had settled on this plot. The biggest change from the previous iterate was that we blunted the ends of each petal, to help the users interpret the data, users weren’t sure if the data was represented at the edge or the center of the radius. With the blunted petal we are encoding the data at the outer most edge or the petal.

<hr>

## The results

<figure><img src="/images/metmap/screenshot-2024-06-23-at-12-10-08-pm.webp" alt="MetMap web app showing petal plots for lung cancer cell lines" width="2000" height="1698" loading="lazy" decoding="async"></figure>

<figure><img src="/images/metmap/screenshot-2024-06-23-at-12-11-37-pm.webp" alt="MetMap web app row of non-small cell lung cancer petal plots" width="2000" height="471" loading="lazy" decoding="async"></figure>

We then quickly built a simple exploratory visualization to see the whole data set. Users are able to filter by some set parameters, future iterations would include more custom filter selections.

Within Lung cancer you can quickly see that many Lung cancers have the potential to metastasize in the liver with larger penetrance than other organs.

<figure><img src="/images/metmap/screenshot-2024-06-23-at-12-11-57-pm.webp" alt="MetMap web app grid of melanoma petal plots" width="2000" height="1345" loading="lazy" decoding="async"></figure>

Melanomas have the potential to metastasize on all the tested organs.

The research and the visualization got us the cover of nature!

<div class="row split cols-2">

<div>

<figure><img src="/images/metmap/naturecover.webp" alt="Nature cover, 10 December 2020, &quot;Mapping Metastasis&quot;" width="1000" height="1329" loading="lazy" decoding="async"></figure>

</div>

<div>

**Mapping metastasis**

Most deaths from cancer are related to tumours spreading to secondary sites in the body through metastasis, yet there are significant gaps in our knowledge of the underlying biology of this process. In this week’s issue [Todd Golub and his colleagues](https://doi.org/10.1038/s41586-020-2969-2) report the MetMap, a barcoding system that they have used to determine the metastatic potential of human cancer cell lines. The system is based on an analysis of some 500 cell lines representing 21 solid cancer types. From their analyses, the researchers created petal plots, as illustrated on the cover, that relate — show all

Cover image: Xin Jin, Mary O’Reilly, Lia Petronio and Andrew Tang.

Read the scientific article at [Nature](https://www.nature.com/articles/s41586-020-2969-2) 
Read the blog abou the cover on [Medium](https://medium.com/nature-visuals/fresh-data-plots-sprout-on-natures-latest-cover-40e1797c559a) 
Explore the [visualization](https://depmap.org/metmap/vis-app/index.html)

</div>

</div>
