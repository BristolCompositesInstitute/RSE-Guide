---
title: "Installing Abaqus on your University of Bristol (UoB) machine"
---
The following information is correct as of 10/10/2024.

This is a how-to guide for users installing Abaqus 2023 with Intel OneAPI iFort 2022 on a Windows managed machine within the UoB. These versions of the software are minimum supported ones throughout the University of Bristol.

## Getting started 

### Installation guide

#### Windows

The installation process on a Windows managed machine uses the UoB Company Portal. Open Company Portal and search for "Abaqus" and you should see something like this:

![Image Failed to load!](Company-Portal-Abaqus.png) 

Follow these steps for installing Abaqus 2023 with Intel OneAPI 2022:

0. Back up you device and uninstall all previous versions of Abaqus and Intel from you machine to ensure no conflicts. This includes completely removing all installed Abaqus and Intel media (this includes Visual Studio but not VS Code) from your device and any related environment variables. IT services can be contacted to help with this removal if you are unsure about this.
1. Install the Intel OneAPI 2022 via the UoB Company Portal.
2. Install Abaqus 2023 via the UoB Company Portal.
3. Use Abaqus 2023 with Intel OneAPI 2022 (iFort) with the Abaqus 2023 CAE and Abaqus Command shortcuts located within `start -> Intel oneAPI 2022`. The Abaqus executables within the DassaultSystems startup folder are not be linked with Intel oneAPI.


**Notes on the installation through UoB Company Portal**

Please ensure you have at least 40 GB free on your UoB computer for the installation of Abaqus and Intel OneAPI 2022. The time it takes to download and install Abaqus and/or Intel OneAPI 2022 through Company Portal can vary significantly for several reasons, from slow/unstable network connections to the time it takes for the computer to install the software. It is recommended to use a stable network connection with decent download speed. 

Unfortunately, Company Portal does not give a clear indication of the progress of the installation of these software. After about 1 hour and 30 mins, the installation of either Abaqus or OneAPI through Company Portal will likely have failed due to timeout. In this scenario, please restart the computer and you should then be able to attempt to reinstall the software again (it can take 10 minutes or so before you are able to reattempt the install). Also, if the install failed, you can go into Settings within Company Portal and then click Sync and wait for 20 minutes or so. After this time, you should be able to attempt to reinstall as well. In both cases, the delay is due to the computer needing to update Intune that it has failed to then get the 'OK' to attempt the install again. 

If you are struggling to install either Abaqus or Intel OneAPI 2022 through UoB Company Portal, please contact the IT services (or the BCI-RSE Team for those within the BCI).

#### Linux

For those using a Linux OS, it is advised for you contact IT services and get them to install Abaqus on your machine. For those within the BCI, please also consult the BCI-RSE team [bci-rse@bristol.ac.uk](mailto:bci-rse@bristol.ac.uk) regarding this. 

**Note:** Abaqus does not officially support the Ubuntu OS but it can be installed on this OS. There are online guides to [install Abaqus on Ubuntu](https://github.com/franaudo/abaqus-ubuntu) but it is **strongly advised** to contact the IT services (or the BCI-RSE for those within the BCI) to get it installed on your machine.



