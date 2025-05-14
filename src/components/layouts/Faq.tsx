import { ChevronThin } from "@/components/ui/icons/Chevrons";

type FaqItem = {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqData: FaqItem[] = [
    {
      question: "If I don't qualify, do I still have to pay the QMP?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi velit condimentum nisi, nec ullamcorper nisi nisi vel nisi. Nullam euismod, nisi vel consectetur euismod, nisi velit condimentum nisi."
    },
    {
      question: "What are Utah's qualifying medical conditions?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus justo, ut varius nibh tincidunt id. Etiam malesuada elit in metus tempus pulvinar."
    },
    {
      question: "Is documentation required to prove you have a medical condition?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo libero, at auctor sem. Aliquam erat volutpat. Aenean tincidunt tortor in turpis fringilla, at fermentum elit porta."
    },
    {
      question: "If I have a medical cannabis card, can I consume in public?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex vel odio malesuada lobortis. Aliquam erat volutpat. Suspendisse potenti. Integer luctus tortor in velit tincidunt, non ultrices magna ultrices."
    },
    {
      question: "What are the eligiblity requirements for a Utah medical cannabis card?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
    },
    {
      question: "What is the complete cost to get a medical cannabis card?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante."
    },
    {
      question: "How long does it take to receive your card?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet."
    },
    {
      question: "Where can I purchase medical cannabis in Utah?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt lorem enim, eget fringilla turpis congue vitae. Phasellus aliquam nisi ut lorem vestibulum eleifend."
    },
    {
      question: "Can I grow my own cannabis plants with a medical cannabis card?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac egestas risus. Nullam sit amet commodo erat. Aliquam quis efficitur erat. Vestibulum vel feugiat turpis."
    },
    {
      question: "How long is a medical cannabis card valid?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus turpis odio, vel ultrices nisl vestibulum vel. Vestibulum vulputate consectetur enim, vel porta ex vehicula non."
    },
    {
      question: "Is my personal information confidential when applying for a medical cannabis card?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum ac tellus semper interdum. Nullam velit nunc, consectetur quis nibh ac, tempus blandit enim. Fusce gravida, risus non fringilla laoreet, diam enim blandit dolor."
    },
  ];

  return(
    <section 
      className="mt-16 mb-12 max-w-5xl mx-auto" 
      role="region"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="text-3xl font-proximaNova font-bold mb-8 text-ug-green-one">FAQs...</h2>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <details 
            key={index} 
            className="group border-b border-gray-200 pb-4"
          >
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-ug-green-one text-lg">
              <span>{faq.question}</span>
              <span className="transition group-open:rotate-180">
                <ChevronThin />
              </span>
            </summary>
            <div className="mt-3 text-ug-green-two text-base">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}