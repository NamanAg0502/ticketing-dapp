import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const CustomCard = ({ ...props }) => {
  const { title, description, content, footer } = props;

  return (
    <Card className="max-w-sm grid grid-rows-2">
      <div className="relative w-full">
        <Image
          src=""
          fill
          sizes="(min-width: 640px) 33%"
          alt="Placeholder"
          className="rounded-t-lg bg-gray-200"
        />
      </div>
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter>{footer}</CardFooter>
      </div>
    </Card>
  );
};

export default CustomCard;
