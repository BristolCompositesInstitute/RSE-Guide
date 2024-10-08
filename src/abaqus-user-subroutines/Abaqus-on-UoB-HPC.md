---
title: "Using Abaqus on UoB HPC clusters"
---

The aim of this guide is to provide basic information and example job scripts
for how to run Abaqus on the [University of Bristol HPC systems](https://www.bristol.ac.uk/acrc/high-performance-computing/)
BlueCrystal Phase 4 and BluePebble.

```{note}
The content of this guide is open source, and contributions are welcomed from the Abaqus user community!
If you see something wrong in this guide or have something to add, please raise an issue [here](https://github.com/BristolCompositesInstitute/RSE-Guide/).
```

Some basic familiarity with the Linux command line and remote HPC systems is assumed;
if you are unfamiliar or need a refresher, then the following courses are recommended:

- [Introduction to the command line](https://alleetanner.github.io/intro-to-command-line/)
- [Introduction to High Performance Computing](https://www.acrc.bris.ac.uk/protected/hpc-docs/training/intro-to-hpc-slurm/index.html)

## Setup

```{important}
Before using Abaqus at the university, you must first register for an Abaqus license -
speak to your supervisor for how to do this and to obtain a charge code for the license.
```

Abaqus (2023) is available as a module on BlueCrystal Phase 4 and BluePebble and can be loaded into the shell environment using

```console
$ module load apps/abaqus/2023
```

You can verify if Abaqus has been setup correctly by running the following command:

```console
$ abaqus information=version
```

If you are using custom user subroutines, you will also need to load the Intel Fortran compiler on BlueCrystal (Phase 4) or BluePebble:

```console
$ module load languages/Intel-OneAPI/2022.2.0
```

## Fair Use


```{important}
Abaqus licenses are shared across the university in a fair-use manner: 
this means that you __should not run a large number of Abaqus jobs
simultaneously__ as this prevents other users from running Abaqus.
```

- You should not be using more than 400 license credits at a time;
  run the command `abaqus licensing dslsstat -usage` in the command line
  to see how many license credits you are currently using.
- As a rough guide, limit yourself to a maximum of 8 non-parallel jobs
  or 3 parallel jobs running simultaneously.
- If you are running [batch array jobs with slurm](https://slurm.schedmd.com/sbatch.html#OPT_array),
  you can use the `%` operator to limit the maximum number of concurrently running array tasks.


```{warning}
If you have more than 400 licenses in use, then your jobs may be
terminated without warning to allow others to use the licenses.
```

## Running Jobs

```{tip}
If you are using [Abaci](https://bristolcompositesinstitute.github.io/abaci/index.html)
to develop and run jobs with user subroutines, you can easily submit HPC jobs
to Slurm with the
[`abaci submit` command](https://bristolcompositesinstitute.github.io/abaci/how-to-guides/hpc-job-submission.html). 
```

## User Guides

- [Single-node submission scripts](HPC-include/single-node.md)
- [Mulit-node submission scripts](HPC-include/multi-node.md)
- [Troubleshooting](HPC-include/troubleshooting.md)


```{toctree}
---
includehidden: true
maxdepth: 2
caption: "Contents:"
---
HPC-include/single-node
HPC-include/multi-node
HPC-include/troubleshooting
```