---
title: "Directed 3D UMAP"
eyebrow: "3D UMAP concept"
summary: "A novel approach to 3D UMAP visualization for single-cell genomic analysis. 2D and 3D UMAP visualizations can be hard to navigate, so we took a new approach: flip it."
category: "dataviz"
tags: ["uxui", "dataviz"]
org: "Broad Institute"
year: 2021
order: 4
featured: true
description: "Directed 3D UMAP: a new way to read high-dimensional genomic data by flipping the UMAP and using height for biological function. Cell Systems cover."
thumbnail: "/images/webster/webster_finalposter3.webp"
cover: "/images/webster/solution-1.webp"
links: [{"label": "Live visualization", "url": "https://depmap.org/webster/#/"}, {"label": "Mini-site", "url": "https://broadinstitute.github.io/webster-umap-minisite/#/"}, {"label": "Paper (Cell Systems)", "url": "https://www.cell.com/cell-systems/fulltext/S2405-4712(21)00488-9"}, {"label": "Medium post", "url": "https://medium.com/@patternvizlab/introducing-a-novel-approach-to-3d-umap-visualization-for-single-cell-genomic-analysis-b79cf09f1af6"}]
grid: {"text": "5/21", "mtext": "1/9"}
---

## The challenge

How do we show relationships between high-dimensional data and biological functions?

### Context

Within single cell genomics, clustering techniques for dimensionality reduction have become a near ubiquitous tool for visualizing genetic data. Techniques such as Principal Component Analysis (PCA) and t-Stochastic Neighbor Embedding (t-SNE) provide frameworks for interpreting high-dimensional data into a low-dimensional space, most commonly a 2d graph. More recently, scientists have adopted a new dimensionality reduction algorithm called Uniform Manifold Approximation and Projection (UMAP), which was introduced by [McInnes et al in 2018](https://arxiv.org/abs/1802.03426).

In an effort to rethink the traditional UMAP embedding, we have created a new framework for visualizing high dimensional data points in 3D space. Crucially, our approach maintains the contextual information provided by UMAP clustering while adding a new dimension in which to plot additional data points. This new visualization method seeks to add another layer of data to the UMAP layout rather than duplicate its existing components.

For this new visualization approach, we partnered with postdoctoral researcher Joshua Pan to create an interface for exploring the outputs of his new computational tool (Webster) for modeling genetic pleiotropy, per the paper’s abstract:

> *“In practice, a single gene perturbation may induce multiple cascading functional outcomes, a genetic principle known as pleiotropy. Here, we model pleiotropy in fitness screen collections by representing each gene perturbation as the sum of multiple perturbations of biological functions, each harboring independent fitness effects inferred empirically from the data. Our approach (‘Webster’) recovered pleiotropic functions for DNA damage proteins from genotoxic fitness screens, untangled distinct signaling pathways upstream of shared effector proteins from cancer cell fitness screens, and predicted the stoichiometry of a new protein complex subunit from fitness data alone.”*

<figure class="placed" style="--gc:5/21;--fw:99.36%;--mgc:1/9;--mfw:87.18%"><img src="/images/webster/wordassociation.webp" alt="Word vector diagram: words like helicopter, drone and bee plotted on wing, engine and sky axes" width="2000" height="1330" loading="lazy" decoding="async"></figure>

Concept of word vectors is useful to understand: one word has meaning in multiple different contexts.

<hr>

## The problem

**Manhattan plots** have long been used for single-cell data, but the context is lost

**UMAPs and TSNEs** provide a good way to give a summary analysis of high-dimensional data, but the UX of navigating them is awkward

- showing the “real” distance between the local or global relationships of data, summarizing to 2 dimensions, points can be close on the umap, but very far apart in relation, opposite of that, points can appear far away from each other, but are very close .

**3D visualizations** are especially challenging,

- navigation through 3D space,

- network hairball issues for large datasets

- Hard to see trends.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:74.29%"><img src="/images/webster/tsne.webp" alt="t-SNE of MNIST digits: points within clusters are similar, but distances between clusters are unclear" width="2000" height="1561" loading="lazy" decoding="async"></figure>

TSNE’s capture local relationships but does not capture global relationships.

<figure class="placed" style="--gc:5/21;--fw:69.22%;--mgc:1/9;--mfw:60.73%"><img src="/images/webster/3d-tsne.webp" alt="A 3D t-SNE point cloud" width="2000" height="1909" loading="lazy" decoding="async"></figure>

Many of these types of visualizations are mapped in 3D space which increases the **“Hairball effect” and hard to navigate**.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/umap-vs-tsne.webp" alt="UMAP and t-SNE embeddings of the same clothing dataset compared" width="2000" height="1111" loading="lazy" decoding="async"></figure>

Two different clustering algorithms. UMAP is better, but same challenges remain...**how to navigate 3D space, clustering overlap, etc.**

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/clustering-and-distance.webp" alt="Clustering by minimum distance changes the embedding; distance does not equal relatedness" width="2000" height="948" loading="lazy" decoding="async"></figure>

Clustering algorithms encode relatedness with distance and the embedding can change depending on how the data is being clustered. The mapping of relatedness does not always portray the data accurately. In the right panel **Near and Equidistant data points are mapped similarly to Far and Equidistant points**.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:78.16%"><img src="/images/webster/arbitrary-embedding.webp" alt="Four UMAP embeddings of mouse cell types, showing embedding shapes the clusters" width="1836" height="1362" loading="lazy" decoding="async"></figure>

Embedding can dictate the shape of the clustering. **Panels and A and B represent the same data but the embedded shows drastic different results**. While panels B, C, D have different datasets completely but the mapping is very similar.

<hr>

## The concept

The concept here is mindful use of 3D space. Using the traditional 2D UMAP representation as our initial encoding mapped along the X and Y axis, can we accurately show relatedness of the data using the Z axis.

<!-- video: squarespace 12dcfd38-5e6a-41d1-a208-a664924e02cd (not yet downloaded) -->

Here’s my initial prototype using a subset of the data from the paper. I used the final UMAP embedding of the data and mapped those points along the X and Y axis. I then took relatedness data from a few biological functions to map along the Z axis. In the prototype the user is able to select which biological function they’d like to explore more and accurately see which gene are essential to the function and are related within the cluster.

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/solution-2.webp" alt="Prototype: UMAP flipped so height encodes Fanconi anemia and fork quality control scores" width="2000" height="1129" loading="lazy" decoding="async"></figure>

<hr>

## The solution

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/solution-1-2.webp" alt="Traditional 3D UMAP beside the proposed directed 3D view" width="2000" height="935" loading="lazy" decoding="async"></figure>

Iterating from the prototype, we wanted to limit the user from freely exploring the 3D space as the experience of freely navigating the space causes users to be quickly disoriented. **In our approach the Z axis is will be defined by the selection of the biological function and we’re using the distance in the Z axis to show relatedness.**

Users will select the function and are able to rotate the plot 90 degrees to be able to see the top scored gene and the related genes, The visualization is able to show neutral genes and also negatively correlated genes as well.

- Blue = genes within a biological function

- Blue opacity = gene score

- Grey = neutral genes

- Red = negatively correlated genes

- Black = centroid of other biological functions

- Z axis = relatedness

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/solution-3.webp" alt="Traditional 2D UMAP beside the Webster 3D UMAP, comparing height from the baseline" width="2000" height="1054" loading="lazy" decoding="async"></figure>

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/solution-4.webp" alt="Annotated Webster 3D UMAP: UMAP embedding on the floor, biological loading score as height" width="2000" height="1006" loading="lazy" decoding="async"></figure>

### Next questions to explore

Do the specific patterns have inherent meaning?

Is the top feature (datapoint) the centroid of the network, or the bottleneck of two clusters?

Is it the keystone?!

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/gestalt-1.webp" alt="Directed 3D UMAP shapes for four gene programs, from common essential to purine biosynthesis" width="2000" height="1091" loading="lazy" decoding="async"></figure>

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:100.0%"><img src="/images/webster/gestalt-2.webp" alt="Can shape carry meaning? Triangular and spike outlines traced over the point clouds" width="2000" height="1052" loading="lazy" decoding="async"></figure>

<hr>

## The results

<figure class="placed" style="--gc:5/21;--fw:100.0%;--mgc:1/9;--mfw:43.49%"><img src="/images/webster/webster_finalposter3.webp" alt="Directed 3D UMAP poster presented at the Broad Institute" width="2000" height="2667" loading="lazy" decoding="async"></figure>

Scientific poster presented at the 2021 Broad Institute annual retreat.

<div class="row placed">

<div style="--gc:5/13;--gr:1/3;--fw:100.0%;--mgc:1/9;--mgr:1/2;--mfw:44.62%">

<figure><img src="/images/webster/cell-systems-cover.webp" alt="Cell Systems cover, April 2022: rising circles over a layered point cloud" width="591" height="768" loading="lazy" decoding="async"></figure>

</div>

<div style="--gc:13/21;--gr:1/2;--mgc:1/9;--mgr:2/3">

We received the cover image for Cell System

In this issue of *Cell Systems*, Pan et al. (p. 286) use cell viability changes following gene perturbation to automatically learn cellular functions or pathways from data. Here, each gene is represented as a data point in 3D space. On the XY plane, genes are arranged near each other if they induce similar cell viability changes upon perturbation (UMAP projection). On the Z axis, genes are plotted based on their association to a specific biological function learned from the data. The strength of the association can be seen by the height, size, and color of that gene's data point. Using this strategy, the authors build interactive visualizations of inferred gene functions ([https://depmap.org/webster/#/](https://depmap.org/webster/#/)). Artwork by Andrew Tang.

Read the scientific paper at [Cell System](https://www.cell.com/cell-systems/fulltext/S2405-4712(21)00488-9) 
Continue reading on [Medium](https://medium.com/@patternvizlab/introducing-a-novel-approach-to-3d-umap-visualization-for-single-cell-genomic-analysis-b79cf09f1af6) 
Explore the [visualization](https://broadinstitute.github.io/webster-umap-minisite/#/)

</div>

</div>
