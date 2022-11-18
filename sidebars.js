// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  allcontent: [
    //Tutorial Parent
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "doc",
        id: "tutorials/intro",
      },
      collapsed: false,
      items: [
        // Build Code
        {
          type: "category",
          label: "Build Code",
          link: {
            type: "doc",
            id: "tutorials/build-code",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "tutorials/build-code" }],
        },

        // Deploy Services
        {
          type: "category",
          label: "Deploy Services",
          link: {
            type: "doc",
            id: "tutorials/deploy-services",
          },
          collapsed: true,
          items: [
            { type: "autogenerated", dirName: "tutorials/deploy-services" },
          ],
        },

        // Manage Feature Flags - feature-flags
        {
          type: "category",
          label: "Manage Feature Flags",
          link: {
            type: "doc",
            id: "tutorials/manage-feature-flags",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/manage-feature-flags",
            },
          ],
        },

        // Manage Cloud Costs - cloud-cost-management
        {
          type: "category",
          label: "Manage Cloud Costs",
          link: {
            type: "doc",
            id: "tutorials/manage-cloud-costs",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/manage-cloud-costs",
            },
          ],
        },

        // Manage Service Reliability - service-reliability-management
        {
          type: "category",
          label: "Manage Service Reliability",
          link: {
            type: "doc",
            id: "tutorials/manage-service-reliability",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/manage-service-reliability",
            },
          ],
        },

        // Orchestrate Security Tests - security-testing-orchestration
        {
          type: "category",
          label: "Orchestrate Security Tests",
          link: {
            type: "doc", // "generated-index",
            id: "tutorials/orchestrate-security-tests",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/orchestrate-security-tests",
            },
          ],
        },

        // Run Chaos Experiments - chaos-engineering
        {
          type: "category",
          label: "Run Chaos Experiments",
          link: {
            type: "doc",
            id: "tutorials/run-chaos-experiments",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/run-chaos-experiments",
            },
          ],
        },

        // Platform - platform
        {
          type: "category",
          label: "Administer Harness Platform",
          link: {
            type: "doc",
            id: "tutorials/platform",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "tutorials/platform" }],
        },

        //Additional Items in this parent can go here.
      ],
    },
    // Documentation Parent
    {
      type: "category",
      label: "Documentation",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          /*
          type: "doc",
          label: "Get started",
          id: "docs/get-started",
          */
          type: "category",
          label: "Get started",
          link: {
            type: "generated-index",
            slug: "/docs/get-started",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/get-started",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/get-started",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Continuous Integration",
          id: "docs/continuous-integration",
          */
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "generated-index",
            slug: "/docs/continuous-integration",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/continuous-integration",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/continuous-integration",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Continuous Delivery",
          id: "docs/continuous-delivery",
          */
          type: "category",
          label: "Continuous Delivery",
          link: {
            type: "generated-index",
            slug: "/docs/continuous-delivery",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/continuous-delivery",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/continuous-delivery",
            },
          ],
        },
        {
  /*
          type: "doc",
          label: "Feature Flags",
          id: "docs/feature-flags",
          */
          type: "category",
          label: "Feature Flags",
          link: {
            type: "generated-index",
            slug: "/docs/feature-flags",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/feature-flags",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/feature-flags",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Cloud Cost Management",
          id: "docs/cloud-cost-management",
          */
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "generated-index",
            slug: "/docs/cloud-cost-management",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/cloud-cost-management",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/cloud-cost-management",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Service Reliability Management",
          id: "docs/service-reliability-management",
          */
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "generated-index",
            slug: "/docs/service-reliability-management",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/security-testing-orchestration",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/service-reliability-management",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Security Testing Orchestration",
          id: "docs/security-testing-orchestration",
          */
          type: "category",
          label: "Security Testing Orchestration",
          link: {
            type: "generated-index",
            slug: "/docs/security-testing-orchestration",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/security-testing-orchestration",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/security-testing-orchestration",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Chaos Engineering",
          id: "docs/chaos-engineering",
          */
          type: "category",
          label: "Chaos Engineering",
          link: {
            type: "generated-index",
            slug: "/docs/chaos-engineering",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/chaos-engineering",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/chaos-engineering",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Harness Platform",
          id: "docs/harness-platform",
          */
          type: "category",
          label: "Harness Platform",
          link: {
            type: "generated-index",
            slug: "/docs/harness-platform",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/platform",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/harness-platform",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Self-Managed Enterprise Edition",
          id: "docs/self-managed-enterprise-edition",
          */
          type: "category",
          label: "Self Managed Enterprise Edition",
          link: {
            type: "generated-index",
            slug: "/docs/self-managed-enterprise-edition",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/self-managed-enterprise-edition",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/self-managed-enterprise-edition",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "FirstGen docs",
          id: "docs/first-gen-docs",
          */
          type: "category",
          label: "FirstGen docs",
          link: {
            type: "generated-index",
            slug: "/docs/first-gen-docs",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/first-gen-docs",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/first-gen-docs",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "FAQs",
          id: "docs/frequently-asked-questions",
          */
          type: "category",
          label: "FAQs",
          link: {
            type: "generated-index",
            slug: "/docs/frequently-asked-questions",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/frequently-asked-questions",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/frequently-asked-questions",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Troubleshooting",
          id: "docs/troubleshooting",
          */
          type: "category",
          label: "Troubleshooting",
          link: {
            type: "generated-index",
            slug: "/docs/troubleshooting",
            /* Uncomment this block while we have a lading page for module docs
            type: "doc",
            id: "docs/troubleshooting",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "docs/troubleshooting",
            },
          ],
        },
      ],
    },

    //Additional Items in this parent can go here.
  ],
};

module.exports = sidebars;
