export const personalInfo = {
  name: "Sai Venkata Chaitanya Chitturi",
  firstName: "Chaitanya",
  lastName: "Chitturi",
  title: "Cloud Engineer",
  location: "Blacksburg, VA",
  email: "chaitanyachitturi99@gmail.com",
  phone: "(703)-862-0600",
  photo: "https://customer-assets.emergentagent.com/job_tech-and-travel/artifacts/uobcihah_IMG_7447.png",
  bio: "Passionate Cloud Engineer specializing in AWS infrastructure optimization, DevOps automation, and scalable cloud solutions. With a strong foundation in infrastructure as code and CI/CD pipelines, I help organizations build reliable, secure, and cost-effective cloud environments.",
  tagline: "Building scalable infrastructure aligned with business requirements",
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
    dates: "Apr 2024 - Present",
    location: "Blacksburg, VA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png",
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
    dates: "Aug 2023 - Apr 2024",
    location: "USA",
    logo: "https://wynbit.com/wp-content/uploads/2023/03/wynbit-logo.svg",
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
    dates: "May 2020 - Aug 2021",
    location: "India",
    logo: null,
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
    impact: "Enabled data scientists and analysts to leverage advanced AI capabilities for actionable insights",
    github: null,
    live: null
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
    impact: "Significantly improved operational efficiency and security compliance across the team",
    github: null,
    live: null
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
    impact: "Achieved 25% reduction in cloud costs while maintaining performance and reliability",
    github: null,
    live: null
  }
];

// Skills with logo URLs (using SVG logos from various CDNs)
export const skillsWithLogos = [
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Terraform", logo: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
  { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
  { name: "Jenkins", logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
  { name: "GitLab", logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
  { name: "GitHub Actions", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
  { name: "Ansible", logo: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" },
  { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { name: "MongoDB", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    id: 2,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    id: 3,
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2024"
  },
  {
    id: 4,
    name: "Google Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2023"
  },
  {
    id: 5,
    name: "Agile Software Development",
    issuer: "Certification Authority",
    date: "2022"
  },
  {
    id: 6,
    name: "Python Programming",
    issuer: "Coursera",
    date: "2021"
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
  }
];

export const photographyGallery = [
  {
    id: 1,
    title: "Alexandria Waterfront",
    image: "/images/Alexandria Water Front Building.jpg",
    location: "Alexandria, VA"
  },
  {
    id: 2,
    title: "American Robin",
    image: "/images/American Robin.jpg",
    location: "Virginia"
  },
  {
    id: 3,
    title: "Blue Heron",
    image: "/images/Blue Heron.jpg",
    location: "Virginia"
  },
  {
    id: 4,
    title: "Downy Woodpecker",
    image: "/images/Downy Woodpecker.jpg",
    location: "Virginia"
  },
  {
    id: 5,
    title: "Duck",
    image: "/images/Duck.jpg",
    location: "Virginia"
  },
  {
    id: 6,
    title: "Space Suite",
    image: "/images/space suite.jpg",
    location: "Virginia"
  },
  {
    id: 7,
    title: "Full Moon",
    image: "/images/Full Moon.jpg",
    location: "Virginia"
  },
  {
    id: 7,
    title: "GMU Clock Tower",
    image: "/images/GMU Clock.jpg",
    location: "George Mason University, VA"
  },
  {
    id: 8,
    title: "Southwest Landscape",
    image: "/images/Southwest_Low_Whites.jpg",
    location: "Southwest USA"
  },
  {
    id: 9,
    title: "Cascades",
    image: "/images/cascades.jpg",
    location: "Virginia"
  },
  {
    id: 10,
    title: "White-throated Sparrow",
    image: "/images/white-throated sparrow.jpg",
    location: "Virginia"
  }
];

export const blogs = [
  {
    id: 1,
    title: "Optimizing AWS Costs: A Practical Guide",
    excerpt: "Learn how to reduce your AWS cloud costs by 25% through strategic optimization techniques and best practices.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["AWS", "Cost Optimization", "Cloud"],
    url: "https://medium.com/@chaitanyachitturi99"
  },
  {
    id: 2,
    title: "Building Scalable CI/CD Pipelines with GitLab",
    excerpt: "A comprehensive guide to setting up automated deployment pipelines using GitLab CI/CD and Terraform.",
    date: "2024-02-10",
    readTime: "12 min read",
    tags: ["DevOps", "CI/CD", "GitLab"],
    url: "https://medium.com/@chaitanyachitturi99"
  },
  {
    id: 3,
    title: "Introduction to Amazon Bedrock for Developers",
    excerpt: "Explore how to leverage Amazon Bedrock for building AI-powered applications with practical examples.",
    date: "2024-03-05",
    readTime: "10 min read",
    tags: ["AWS", "AI/ML", "Bedrock"],
    url: "https://medium.com/@chaitanyachitturi99"
  }
];