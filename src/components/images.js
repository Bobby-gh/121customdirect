// Central image library for the site.
// All photos are Unsplash URLs (verified) and are served unoptimized via next/image.

const u = (id, w = 1600) => `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`

// Freight, port and shipment imagery
export const portAerial = u('photo-1494412651409-8963ce7935a7')
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
export const homeBanners = [portAerial, containerShip, truckDusk, warehouseRacks, planeInClouds]

// Per-page banner rotation
export const aboutBanners = [portCranes, warehouseBoxes, truckHighway]
export const solutionsBanners = [containerShip, planeAtGate, trailerFleet]
export const contactBanners = [cargoShipSea, warehouseAisle, roadDusk]
export const appBanners = [warehouseAisle, portAerial, planeLanding]
