import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-gatsby';
import { initPlasmicLoaderWithRegistrations } from '../plasmic-init';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query {
    plasmicOptions
  }
`;

export default function Host({ data }) {
  const { plasmicOptions } = data;
  initPlasmicLoaderWithRegistrations(plasmicOptions);
  return <PlasmicCanvasHost />;
}