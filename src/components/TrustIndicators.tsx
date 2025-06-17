
import React from 'react';

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-blue-50 border-y">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9/5 from 2,500+ Mexican immigrants</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏆</span>
              <span>Spanish Translation Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>100% USCIS USA Acceptance Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Secure & Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
