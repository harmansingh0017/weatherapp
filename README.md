# React App Jenkins Pipeline

This Jenkins pipeline automates the build and deployment process for a React application using Docker, HashiCorp Vault, Kubernetes (EKS), Helm, Prometheus, and Grafana. The pipeline is designed to enhance collaboration, streamline development workflows, and ensure continuous delivery.

## Pipeline Overview 

The Jenkins pipeline consists of several stages that encompass the following processes:

1. **BUILD:**

   - Installs npm dependencies.
   - Builds the React application.

2. **Build App Image:**

   - Installs npm dependencies.
   - Builds the React application.
   - Creates a Docker image for the application.
   
3. **Upload Image:**

   - Pushes the Docker image to a Docker registry (DockerHub).
   - Removes the unused Docker image from the local machine.
   
4. **Kubernetes Deploy:**

   - Deploys the React application to Kubernetes (EKS) using Helm.
   
## Prerequisites

Ensure the following prerequisites are met before setting up and executing the pipeline:

1. **Jenkins:**

   - Install and configure Jenkins in your environment.

2. **Docker:**

   - Install Docker for building and pushing Docker images.
   
3. **Kubernetes (EKS):**

   - Set up an EKS cluster along with S3 bucket to store state of the cluster.
   
4. **Helm:**

   - Install Helm, the Kubernetes package manager.
   
5. **Vagrant VM:**

   - Use a Vagrant VM machine for Jenkins agent operations and Hashicorp vault server.
   
6. **HashiCorp Vault:**

   - Implement HashiCorp Vault for storing the dockerhub credentials and accessing it from Jenkins using AppRole credentials.

7. **Prometheus and Grafana:**

   - Adds the Prometheus Helm chart repository and Installs Prometheus and Grafana using Helm in the 'prometheus' namespace.
 

 
