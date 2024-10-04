---
title: "Installing Abaqus on your University of Bristol (UoB) machine"
---

This is a how-to guide for users installing Abaqus 2023 with Intel OneAPI iFort 2022 on a Windows managed machine within the UoB. These version of the software are minimum supported versions throughout the university. This information is correct of 4/10/2024.

## Getting started 

### Installation guide

#### Windows

The installation process on a Windows managed machine uses the UoB Company Portal. Open Company Portal and search for "Abaqus" and you should see something like this:

![Image Failed to load!](Company-Portal-Abaqus.png) 

Follows these steps for installing Abaqus 2023 with Intel OneAPI 2022:

0. Back up you device and uninstall all previous versions of Abaqus and Intel from you machine to ensure no conflicts.
1. Install the Intel OneAPI 2022 via the UoB Company Portal.
2. Install Abaqus 2023 via the UoB Company Portal.
3. Use Abaqus 2023 with Intel OneAPI 2022 (iFort) with the Abaqus 2023 CAE and Abaqus Command shortcuts located within `start -> Intel oneAPI 2022`. The Abaqus executables within the DassaultSystems startup folder are not be linked with Intel oneAPI.

#### Linux

For those using a Linux OS, It is advised for you contact IT services and get them to install Abaqus on your machine. For those within the BCI, please also consult the BCI-RSE team [bci-rse@bristol.ac.uk](mailto:bci-rse@bristol.ac.uk) regarding this. 

**Note:** Abaqus does not officially support the Ubuntu OS but it can be installed on this OS. There are online guides to [install Abaqus on Ubuntu](https://github.com/franaudo/abaqus-ubuntu) but it is **strongly advised** to contact the IT services (or the BCI-RSE for those within the BCI) to get it installed on your machine.



