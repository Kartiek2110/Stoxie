import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="col-span-1">
            <img src="media/images/logo.svg" className="w-1/2 mb-4" alt="Logo" />
            <p className="text-gray-600">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <div className="space-y-2">
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Products</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Pricing</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Referral programme</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Careers</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Zerodha.tech</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Press & media</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Zerodha cares (CSR)</a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <div className="space-y-2">
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Support portal</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Z-Connect blog</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">List of charges</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Downloads & resources</a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
            <div className="space-y-2">
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Open an account</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Fund transfer</a>
              <a href="" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">60 day challenge</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-gray-500 text-sm space-y-4">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
