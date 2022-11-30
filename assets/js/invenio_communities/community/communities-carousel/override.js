// This file is part of CDS RDM
// Copyright (C) 2022 CERN.
//
// CDS RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { CDSCommunitiesCarousel } from "./overrides/CommunitiesCarousel";
import { CDSCarouselItem } from "./overrides/CarouselItem";

export const overriddenComponents = {
  "InvenioCommunities.CommunitiesCarousel.layout": CDSCommunitiesCarousel,
  "InvenioCommunities.CarouselItem.layout": CDSCarouselItem,
};
