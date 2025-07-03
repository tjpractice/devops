## 🏗️ Architecture Overview

This project follows a **modular, production-grade DevOps architecture** to deploy a React frontend application with scalable infrastructure and monitoring.

---

### ✔️ Components:

1. **Developer Workflow:**
   - Developer pushes code to GitHub repository.
   - GitHub Actions automatically triggers CI/CD pipelines based on workflow configuration.

2. **Infrastructure Provisioning (Terraform):**
   - GitHub Actions runs Terraform to provision an Amazon EKS (Elastic Kubernetes Service) cluster on AWS.
   - No Terraform modules are used — pure Terraform code for transparency and customization.

3. **Containerization (Docker):**
   - React application is packaged into a Docker container.
   - Optional pipeline to build and push Docker images to Docker Hub.

4. **Kubernetes Deployment:**
   - Kubernetes manifests are applied via GitHub Actions to deploy:
     - React frontend app (with scaling).
     - Monitoring stack (Prometheus + Grafana).
   - LoadBalancer exposes the app externally.
   
5. **Monitoring (Prometheus + Grafana):**
   - Prometheus collects metrics from Kubernetes cluster.
   - Grafana visualizes the collected metrics via dashboards.
   - Deployed inside a dedicated `monitoring` namespace in the cluster.

---

### ✔️ Architecture Diagram:

```mermaid
flowchart TD
    Developer -->|Push Code| GitHub
    GitHub -->|Terraform Workflow| AWS
    AWS -->|Creates| EKS(Cluster)
    GitHub -->|Docker Build & Push| DockerHub
    GitHub -->|K8s Workflow| EKS
    EKS -->|Runs| ReactApp[React Frontend App]
    EKS -->|Runs| Monitoring(Prometheus & Grafana)

