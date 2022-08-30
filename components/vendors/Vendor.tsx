import Card from "../card";
import Content from "./content";
import type { TVendorProps } from "./types";

const Vendor = ({
  vendor: {
    title,
    logo,
    backgroundImage,
    description,
    rate,
    voteCount,
    deliveryFee,
    isZFExpress,
    deliveryTime
  },
}: TVendorProps) => {
  return (
    <Card title={title} logo={logo} backgroundImage={backgroundImage}>
      <Content
        title={title}
        description={description}
        rate={rate}
        voteCount={voteCount}
        deliveryFee={deliveryFee}
        isZFExpress={isZFExpress}
        deliveryTime={deliveryTime}
      />
    </Card>
  );
};

export default Vendor;
