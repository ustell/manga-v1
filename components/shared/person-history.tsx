'use client';
import { characters } from '@/data/characters';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from './container';

export default function CharacterSelection() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters.hideki);

  return (
    <Container className="flex justify-center" size={'xs'}>
      <div
        className="h-[664px] w-[910px] relative"
        style={{
          backgroundImage: 'url(/person-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute flex flex-col top-[35%] gap-4 ">
          {Object.entries(characters).map(([key, char]) => (
            <button
              key={key}
              onClick={() => setSelectedCharacter(char)}
              className="transition-transform hover:scale-110"
            >
              <Image
                src={char.image}
                alt={char.name}
                width={64}
                height={64}
                className={`rounded-lg filter ${
                  selectedCharacter === char ? 'grayscale-0' : 'grayscale'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="relative top-[25%] left-[30%]">
          <Image
            src={selectedCharacter.image}
            alt={selectedCharacter.name}
            width={350}
            height={500}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-[400px] bg-[#828B8F] bg-opacity-90 p-6  text-white shadow-lg">
        <h2 className="text-2xl font-bold">{selectedCharacter.name}</h2>
        <p className="text-sm italic text-gray-400">
          {selectedCharacter.title}
        </p>
        <div className="mt-4">
          <p>
            <strong>Возраст:</strong> {selectedCharacter.age}
          </p>
          <p>
            <strong>Статус:</strong> {selectedCharacter.occupation}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Характер</h3>
          <p className="text-sm text-gray-300">
            {selectedCharacter.personality}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">История</h3>
          <p className="text-sm text-gray-300">{selectedCharacter.history}</p>
        </div>
      </div>
    </Container>
  );
}
