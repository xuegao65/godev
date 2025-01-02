const PATHS = {
  // Public routes (accessible without wallet connection)
  PUBLIC: {
    LANDING: "/",
    NOTFOUND: "/not-found",
    APP: "/work-in-progress", //"/app" need to change this
    MARKETPLACE: "/work-in-progress", //"/marketplace" need to change this
    ROADMAP: "/roadmap",
    BLOG: "/blog",
    CONNECT_WALLET: "/connect-wallet",

    PRIVACY_POLICY: "/privacy-policy",
    TERMS_OF_SERVICE: "/terms-of-service",
    WHITEPAPER: "https://jimpsons.gitbook.io/jimpsons.org",

    WORK_IN_PROGRESS: "/work-in-progress",
  },

  // Protected routes (require wallet connection)
  PROTECTED: {
    DASHBOARD: "/dashboard",
    PREDICTIONS: "/predictions",
    CREATE_PREDICTION: "/predictions/create",
    NFT: "/nft",
    CREATE_NFT: "/nft/create",
    PROFILE: "/profile",
  },
};

export default PATHS;
