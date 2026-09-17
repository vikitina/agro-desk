export const home = {
  eyebrow: "DEMONSTRATION APPLICATION",

  title: "A role-based application built for real-world access control.",

  description:
    "This project demonstrates authentication, role-based permissions, protected routes, CRUD operations and secure backend access.",

  primaryAction: "Explore the application",
  secondaryAction: "View demo access",

  featuresTitle: "What this application demonstrates",

  features: {
    authentication: {
      title: "Authentication",
      description:
        "Registration, login, logout and persistent sessions.",
    },

    authorization: {
      title: "Role-based access",
      description:
        "Different users see and can perform different operations.",
    },

    permissions: {
      title: "Fine-grained permissions",
      description:
        "Permissions can be assigned to roles and managed by administrators.",
    },

    security: {
      title: "Backend security",
      description:
        "Access is protected on the backend, not only hidden in the interface.",
    },

    crud: {
      title: "CRUD operations",
      description:
        "Create, read, update and delete operations with permission checks.",
    },

    architecture: {
      title: "Extensible architecture",
      description:
        "The system is designed to make adding roles, permissions and features predictable.",
    },
  },

  rolesTitle: "Demo roles",

  rolesDescription:
    "Each role provides a different level of access to the application.",

  roles: {
    administrator: {
      name: "Administrator",
      description:
        "Full access. Can manage users, roles, permissions and application data.",
    },

    manager: {
      name: "Manager",
      description:
        "Can manage operational data but has limited access to system administration.",
    },

    viewer: {
      name: "Viewer",
      description:
        "Read-only access to the application.",
    },
  },

  invitationTitle: "Ready to explore?",

  invitationDescription:
    "Create an account or use one of the demonstration users to explore the application.",

  demoTitle: "Demo access",

  demoAdministrator: "Administrator",
  demoManager: "Manager",
  demoViewer: "Viewer",

  demoCredentials:
    "Demo credentials will be available on the login page.",

  demo: {
    title: "Try the application",

    description:
      "Explore RoleDesk with demo accounts or create your own user and see how roles change the available access.",

    quick: {
      label: "QUICK DEMO",

      title: "Explore different roles",

      description:
        "Sign in with a prepared demo account and compare how the application changes for different roles.",

      action: "Try demo accounts",

      steps: {
        chooseRole: {
          title: "Choose a role",

          description:
            "Select Admin, Manager or Viewer to explore the application from different perspectives.",
        },

        login: {
          title: "Sign in",

          description:
            "Use the prepared demo credentials available on the login page.",
        },

        compare: {
          title: "Compare access",

          description:
            "Log out and try another role to see how navigation and available actions change.",
        },
      },
    },
    management: {
      label: "ROLE MANAGEMENT",

      title: "Test the complete flow",

      description:
        "Create your own account and experience how a user's role can be changed by an administrator.",

      action: "Create an account",

      steps: {
        register: {
          title: "Create an account",

          description:
            "New users automatically receive the Viewer role.",
        },

        changeRole: {
          title: "Change the role",

          description:
            "Sign in as Admin and assign your new user a different role.",
        },

        explore: {
          title: "Sign in again",

          description:
            "Return to your account and see how the available access changes with the new role.",
        },
      },
    },
  },
}