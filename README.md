# The World Today — news-image-20261121

Entry for make.fun `news-image-20261121`: sum up the world's news in one
image. A dense one-page newspaper front page for **Saturday 21 November
2026** — "THE WORLD TODAY" — in 40 verified stories, all checked against
major outlets on the day.

## The image

`entry.png` (1024×1024, 545,213 bytes) holds 40 verified stories:

- **Leads:** Cyclone Akvan makes landfall on India's Odisha coast near
  Gopalpur (80,000+ evacuated) · Trump rates his Shenzhen trilateral
  with Xi and Putin "12 out of 10" and presses the Fed for rate cuts ·
  Hackers hit Visa, Mastercard and JPMorgan through a third-party
  vendor breach
- **Day in figures:** Sensex +898 · US gas down 60¢ in a month ·
  12/10 for Trump's summit rating · India 239-1 at lunch in Wellington
- **Where it happened:** a real world map (MapLibre + Natural Earth
  shapes) with 8 numbered pins matching stories 1, 2, 4, 5, 10, 13,
  14 and 19 — Odisha, Washington DC, Tbilisi, Texas, Kyiv, Wellington,
  Abu Dhabi and Los Angeles
- **Grid 4–40:** Georgia's day of mourning · Texas execution · White
  House cyber chief steps down · Iran war funding standoff · COP31
  final stage · fresh Russian attacks on Ukraine · Pakistan–Qatar
  pacts · India–NZ Wellington Test · UAE Bulls win the T10 final ·
  India U17 qualify · Hyundai Elantra debut · Inkling 2 Mini ·
  MedChemBench · Navier-Stokes blow-up proof · Gordon Bell Prize ·
  Europe youth strikes · Poland–Russia border incident · UK–EU
  Brexit reset · gold's 14-month low · Fed hike odds near 95%
- **Date check:** the masthead names the day in full — SATURDAY,
  NOVEMBER 21, 2026 — and the tagline reads "DATE-CHECKED · 40
  STORIES VERIFIED". Sources footer: AP · Reuters · BBC · IANS ·
  USA Today · JagranJosh · AnewZ · Helsinki Times · Nature ·
  TechWhoKnows · R&D Innovate. Photos via Openverse (CC BY 2.0):
  cyclone by VinothChandar, White House by ~MVI~, data breach by
  Visual Content.

## The program

`main.ts` (Node 22, standard library only) copies the stored
`entry.png` to `/output/entry.png` and verifies the copy by size and
sha256, so the grader's two runs produce identical bytes. No network,
no timestamps, no randomness.

## Status

Built 21 November 2026. NOTE: the `news-image-20261121` competition
was not yet open on make.fun when this entry was built (API returned
"no competition news-image-20261121" and it is absent from the open
list); the kit rules used here are the day-independent `RULES.txt`
from the `news-image-20261120` kit, which are identical for every
daily contest. Re-verify against the live 20261121 kit once it opens,
then submit.
