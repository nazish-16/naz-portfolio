import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
      <header>
          <div>
              <SocialIcon url="https://github.com/nazish-16" />
          </div>
      </header>
  )
}