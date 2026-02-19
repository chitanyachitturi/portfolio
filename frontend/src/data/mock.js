export const personalInfo = {
  name: "Sai Venkata Chaitanya Chitturi",
  title: "Cloud Engineer",
  location: "Blacksburg, VA",
  email: "chaitanyachitturi99@gmail.com",
  phone: "(703)-862-0600",
  photo: "https://customer-assets.emergentagent.com/job_baa3294c-70d0-455b-b5b8-da272f44bf4d/artifacts/omrq2kw4_IMG_7447.jpg",
  bio: "Passionate Cloud Engineer specializing in AWS infrastructure optimization, DevOps automation, and scalable cloud solutions. With a strong foundation in infrastructure as code and CI/CD pipelines, I help organizations build reliable, secure, and cost-effective cloud environments. Currently optimizing cloud infrastructure at Virginia Tech while continuously expanding my expertise in cutting-edge cloud technologies.",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/chaitanya-chitturi/",
    medium: "https://medium.com/@chaitanyachitturi99",
    github: "https://github.com"
  }
};

export const experience = [
  {
    id: 1,
    company: "Virginia Tech",
    role: "Cloud Engineer",
    period: "April 2024 - Present",
    location: "Blacksburg, VA",
    description: "Leading cloud infrastructure optimization and automation initiatives, reducing costs by 25% while enhancing security and scalability.",
    highlights: [
      "Optimized AWS infrastructure through resource right-sizing and autoscaling for reliable analytics delivery",
      "Automated deployments using Terraform and GitLab CI/CD pipelines, minimizing manual intervention",
      "Deployed advanced analytics applications using Amazon Bedrock, Bedrock Agents, and integrated prompt/flow components",
      "Reduced cloud costs by 25% through AWS Transfer Family to EC2-based SFTP migration and S3 lifecycle policies",
      "Developed custom Python CLI utility using Click to streamline operational tasks and access key rotation",
      "Integrated AWS S3 with Splunk for centralized logging and operational insights"
    ]
  },
  {
    id: 2,
    company: "Wynbit Inc.",
    role: "Cloud Engineer",
    period: "August 2023 - April 2024",
    location: "USA",
    description: "Managed AWS cloud resources for mission-critical healthcare applications, implementing CI/CD pipelines and container orchestration.",
    highlights: [
      "Provisioned and managed AWS cloud resources for mission-critical healthcare applications",
      "Engineered Jenkins CI/CD pipelines, accelerating code deployments by 30%",
      "Developed Python and YAML-based CloudFormation IaC templates for infrastructure standardization",
      "Enhanced system scalability using Docker and Kubernetes for container orchestration",
      "Improved database performance through advanced SQL management in AWS"
    ]
  },
  {
    id: 3,
    company: "Data Stratics",
    role: "Software Engineer",
    period: "May 2020 - August 2021",
    location: "India",
    description: "Built highly available, scalable cloud environments and managed cloud migration projects, improving database efficiency by 40%.",
    highlights: [
      "Built highly available, scalable cloud environments using EC2, S3, RDS, ELB, and CloudFormation",
      "Migrated on-premises MySQL to multi-AZ RDS, boosting database efficiency by 40%",
      "Reduced app downtime by 20% with CloudWatch monitoring and automated SNS alerts",
      "Automated data backup and retention using S3 versioning, lifecycle policies, and Glacier archival",
      "Collaborated with cross-functional teams to resolve tier 3 support issues"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Amazon Bedrock Analytics Deployment",
    category: "AI/ML Infrastructure",
    description: "Deployed advanced analytics applications leveraging Amazon Bedrock and Bedrock Agents with integrated prompt engineering and flow components to deliver scalable AI-powered insights.",
    technologies: ["Amazon Bedrock", "AWS Lambda", "Python", "Terraform", "S3"],
    highlights: [
      "Implemented AI-powered analytics using Amazon Bedrock Agents",
      "Designed scalable architecture for prompt flow integration",
      "Automated deployment pipeline with Terraform and GitLab CI/CD",
      "Ensured reliable delivery of analytics insights to end-users"
    ],
    impact: "Enabled data scientists and analysts to leverage advanced AI capabilities for actionable insights"
  },
  {
    id: 2,
    title: "Python CLI Automation Tool",
    category: "DevOps Automation",
    description: "Developed a custom Python CLI utility using Click framework to streamline routine operational tasks including access key rotation, secure vault logins, and resource management.",
    technologies: ["Python", "Click", "AWS SDK", "Boto3", "HashiCorp Vault"],
    highlights: [
      "Built intuitive command-line interface for common DevOps tasks",
      "Automated AWS access key rotation with built-in security checks",
      "Integrated secure vault authentication workflows",
      "Reduced manual operational overhead by 60%"
    ],
    impact: "Significantly improved operational efficiency and security compliance across the team"
  },
  {
    id: 3,
    title: "AWS Cost Optimization Initiative",
    category: "Cloud Cost Management",
    description: "Comprehensive cost optimization project that reduced cloud expenditure by 25% through infrastructure right-sizing, resource migration, and intelligent lifecycle management.",
    technologies: ["AWS Cost Explorer", "Terraform", "Python", "EC2", "S3"],
    highlights: [
      "Migrated AWS Transfer Family to EC2-based SFTP solution",
      "Implemented automated S3 lifecycle policies for data archival",
      "Designed reserved instance plans for EC2, ElastiCache, and RDS",
      "Right-sized resources based on utilization metrics and autoscaling"
    ],
    impact: "Achieved 25% reduction in cloud costs while maintaining performance and reliability"
  }
];

export const skills = {
  cloud: [
    "Amazon Web Services (AWS)",
    "Google Cloud Platform (GCP)",
    "EC2",
    "S3",
    "Lambda",
    "RDS",
    "CloudFormation",
    "CloudWatch",
    "IAM",
    "Amazon Bedrock",
    "ElastiCache",
    "ELB",
    "Auto Scaling"
  ],
  devops: [
    "Terraform",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitLab CI/CD",
    "Git",
    "GitHub",
    "Microservices"
  ],
  programming: [
    "Python",
    "Bash",
    "YAML",
    "HTML/CSS",
    "SQL"
  ],
  databases: [
    "MySQL",
    "MongoDB",
    "Oracle",
    "Amazon RDS"
  ],
  tools: [
    "VS Code",
    "JIRA",
    "Splunk",
    "MySQL Workbench",
    "MongoDB Compass"
  ],
  networking: [
    "TCP/IP",
    "HTTP/HTTPS",
    "UDP"
  ]
};

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    icon: "award"
  },
  {
    id: 2,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "award"
  },
  {
    id: 3,
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    icon: "award"
  },
  {
    id: 4,
    name: "Google Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    icon: "award"
  },
  {
    id: 5,
    name: "Agile Software Development",
    issuer: "Certification Authority",
    icon: "award"
  },
  {
    id: 6,
    name: "Python Programming",
    issuer: "Coursera",
    icon: "award"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Information Systems",
    institution: "George Mason University",
    location: "Virginia, USA",
    period: "August 2021 - May 2023",
    description: "Focused on cloud computing, data systems, and software engineering principles."
  },
  {
    id: 2,
    degree: "Bachelor of Technology",
    institution: "Previous Institution",
    location: "India",
    period: "2016 - 2020",
    description: "Foundation in computer science and engineering."
  }
];

export const photographyGallery = [
  {
    id: 1,
    title: "Mountain Sunset",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    location: "Colorado, USA"
  },
  {
    id: 2,
    title: "City Lights",
    category: "Urban",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
    location: "New York, USA"
  },
  {
    id: 3,
    title: "Ocean Waves",
    category: "Seascape",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    location: "California Coast"
  },
  {
    id: 4,
    title: "Desert Dunes",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    location: "Arizona, USA"
  },
  {
    id: 5,
    title: "Forest Path",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    location: "Pacific Northwest"
  },
  {
    id: 6,
    title: "Urban Architecture",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    location: "Chicago, USA"
  }
];