import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_USE_MOCK_API: process.env.NEXT_PUBLIC_USE_MOCK_API || 
                             (process.env.NODE_ENV === 'development' ? 'true' : 'false')
  }
};

export default nextConfig;
