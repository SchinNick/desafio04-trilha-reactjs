import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
   title: string;
   description: string;
   url: string;
   ts: number;
   id: string;
}

interface CardsProps {
   cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
   const { isOpen, onClose, onOpen } = useDisclosure()
   const [selectedImageUrl, setSelectedImageUrl] = useState<string>()

   const onViewImage = (url: string) => {
      setSelectedImageUrl(url)
      onOpen()
   }

   return (
      <>
         <SimpleGrid columns={3} spacing={10}>
            {cards.map(card => {
               return (
                  <Card
                     key={card.id}
                     viewImage={onViewImage}
                     data={{
                        title: card.title,
                        description: card.description,
                        url: card.url,
                        ts: card.ts
                     }}
                  />
               )
            })}
         </SimpleGrid>

         <ModalViewImage imgUrl={selectedImageUrl} isOpen={isOpen} onClose={onClose} />
      </>
   );
}
