import faqImage from "../../../assets/images/faq.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <>
      <section className="faq_section md:p-10 p-5 bg-white">
        <div className="container  grid lg:grid-cols-2 grid-cols-1  gap-10">
          <div className="faq_left border rounded-3xl md:p-10  p-5 flex flex-col justify-center items-center">
            <h2 className="md:text-6xl text-2xl font-bold">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p>
              Do you need some help with something or do you have questions on
              some features?
            </p>
            <img
              src={faqImage}
              alt="This is faq related image"
              className="w-full"
            />
          </div>
          <div className="faq_right">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  What is Krishi Vikas Udyog?{" "}
                </AccordionTrigger>
                <AccordionContent>
                  Krishi Vikas Udyog is a digital platform that serves as a
                  comprehensive marketplace for agricultural equipment, inputs,
                  and outputs in India. It connects farmers, dealers, and
                  traders through its mobile application and website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What sets Krishi Vikas Udyog apart from other platforms?{" "}
                </AccordionTrigger>
                <AccordionContent>
                  Krishi Vikas Udyog distinguishes itself by offering a unique
                  platform that facilitates transactions for both agricultural
                  equipment and inputs simultaneously. Additionally, it provides
                  renting facilities, particularly beneficial for small-scale
                  farmers. The platform also offers features such as banner ads
                  and product boosts to enhance visibility and competitiveness
                  for users.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What does the product boost feature of Krishi Vikas Udyog do?
                </AccordionTrigger>
                <AccordionContent>
                  Krishi Vikas Udyog has introduced the unique product boost
                  feature in the application for the betterment of the agri
                  stakeholders. Using the feature, the sellers can extend their
                  marketplace beyond a small locality to a nationwide ground.
                  The product boost feature enhances the specific product's
                  chances of being sold. Among all other products, the boosted
                  product's visibility is improved as it comes above all the
                  listed products. That means it reaches more viewers and
                  potential customers. That is how the product boost helps in
                  selling products fast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How can I use product boost?{" "}
                </AccordionTrigger>
                <AccordionContent>
                  Using the product boost is a simple task in the application.
                  Open the application on your phone, and click the `New` button
                  from the homepage. Select the `Product Boost` option from the
                  box. From any of the previously listed products, select the
                  `Product Boost` option and choose any plan from Basic,
                  Intermediate and Premium. Check the terms and conditions
                  carefully, and finish payment through card, UPI, Netbanking or
                  E-Wallet. And that's it. Your product will be boosted
                  successfully and will be visible to more and more potential
                  customers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is a banner ad? </AccordionTrigger>
                <AccordionContent>
                  A banner ad is particularly helpful when you have a variety of
                  products and you want to make each one visible. Through banner
                  ads, you can promote your products and enterprise as well. In
                  case you get a banner ad subscription, your banner will be
                  visible beside famous brands like Mahindra. You will be able
                  to compete with the tycoons of the industry and grow your
                  business in no time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  How can I use banner ads in Krishi Vikas Udyog Mobile
                  Application?{" "}
                </AccordionTrigger>
                <AccordionContent>
                  The process of banner ads is more or less the same as the
                  product boost. After opening the application on your phone, go
                  to the 'New' option on the homepage. Then tap on it and from
                  the box, select 'Banner ads'. You may choose any plan among
                  Basic, Intermediate and Premium and tap on 'SELECT PLAN'.
                  Provide a campaign name for your banner and upload a photo of
                  your choice. After that, you have to choose one of the 8
                  categories. You can also select the 'All' option. Select the
                  state where you want to promote your banner and tap on the
                  submit option. After checking all the terms and conditions,
                  check the tickbox written 'I accept the condition'. You will
                  now be redirected to payment. You can make payments through
                  UPI, Net Banking, Card or e-wallet. Click on the 'PAY NOW'
                  button and complete the payment. And that's it. Your banner
                  will be visible in the application.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  What are the value-added services of Krishi Vikas Udyog?
                </AccordionTrigger>
                <AccordionContent>
                  Value-added services are some features of the Krishi Vikas
                  application that can enhance the experience of the user and
                  can help the stakeholder in different ways. In the
                  application, there is a weather report forecast system and a
                  crop calendar. The former helps in guiding crucial decisions
                  in crop management and livestock care. Predictions on
                  rainfall, temperature and storms aid in planning planting,
                  irrigation and harvesting strategies. The latter on the other
                  hand aids in efficient resource management, minimizes risks,
                  enables crop rotation, aligns with market demands and promotes
                  sustainable practices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  How can I mark my product as sold?
                </AccordionTrigger>
                <AccordionContent>
                  It is essential to mark your products as 'sold' soon after the
                  deal to avoid any sort of miscommunication with the buyers. To
                  do so, open the application on your phone. After that go to
                  your profile from the homepage and then tap on the 'My posts'
                  option. You will be able to see all the listed products there.
                  From the list tap on the product you want to mark as sold.
                  from the top right corner, click on the edit button and select
                  the 'Mark as Sold' option. That's where your work is done.
                  Your product will be marked as sold successfully. Please keep
                  in mind that the products rejected by our end can not be
                  marked as sold.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  How to reach customer support of Krishi Vikas Udyog?
                </AccordionTrigger>
                <AccordionContent>
                  Krishi Vikas Udyog takes care of your problems responsibly. At
                  any point, if you face any issue, our customer support team is
                  ready to solve your problems. Just open the application on
                  your phone. On the homepage, you will see three dots in the
                  top right corner. Click on the three dots. From the drop-down
                  box, click on the call button and make a call. This way you
                  will be able to connect with the customer support of Krishi
                  Vikas Udyog. To offer a hassle-free experience we have put the
                  customer support phone no. and email address here. Customer
                  support contact no.:8100975657 Customer support
                  Emal:support@krishivikas.com
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
