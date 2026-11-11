// Central image library for the site.
// Banner photos are Pexels cargo and port shots; card and section photos are
// Unsplash, plus Pexels people photography. All URLs are served unoptimized via
// next/image or as CSS backgrounds.

const u = (id, w = 1600, q = 85) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`

// Pexels imagery (free to use).
const pexels = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

// Full-bleed banners, served at 2400px wide so they stay sharp on large screens.
const banner = (id) => pexels(id, 2400)

// People and port imagery
export const businessMeeting = pexels('6146820')
export const portCrew = pexels('28438301')
export const portCranes = u('photo-1494412574643-ff11b0a5c1c3')
export const containerShip = u('photo-1578575437130-527eed3abbec')
export const cargoShipSea = u('photo-1605745341112-85968b19335b')
export const truckHighway = u('photo-1519003722824-194d4455a60c')
export const truckDusk = u('photo-1591768793355-74d04bb6608f')
export const trailerFleet = u('photo-1565793298595-6a879b1d9492')
export const warehouseBoxes = u('photo-1586528116311-ad8dd3c8310d')
export const warehouseAisle = u('photo-1587293852726-70cdb56c2866')
export const warehouseRacks = u('photo-1553413077-190dd305871c')
export const parcels = u('photo-1595246140625-573b715d11dc')
export const planeAtGate = u('photo-1569154941061-e231b4725ef1')
export const planeInClouds = u('photo-1570710891163-6d3b5c47248b')
export const planeLanding = u('photo-1587019158091-1a103c5dd17f')
export const planeWing = u('photo-1436491865332-7a61a109cc05')
export const roadDusk = u('photo-1471958680802-1345a694ba6d')
export const roadFog = u('photo-1516410529446-2c777cb7366d')

// Home page banner rotation
// aerial container port / container yard / ship under cranes at night /
// tugs at berth / container ship loading
export const homeBanners = [
  banner('20216716'),
  banner('21234960'),
  banner('20581299'),
  banner('6572534')
]

// Per-page banner rotation
export const aboutBanners = [banner('30261109'), banner('262353'), banner('14639071')]
export const solutionsBanners = [banner('13025947'), banner('32514815'), banner('10854998')]
export const contactBanners = [banner('39621587'), banner('28278107'), banner('9328777')]
export const appBanners = [banner('31637364'), banner('30090435'), banner('6537735')]
