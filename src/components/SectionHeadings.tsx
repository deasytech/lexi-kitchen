import { Heading } from "@chakra-ui/react";

interface sectionHeadingProps {
  title: string;
}
const SectionHeadings = ({ title }: sectionHeadingProps) => {
  return (
    <Heading size="md" my="1.5rem">
      {title}
    </Heading>
  );
};

export default SectionHeadings;
