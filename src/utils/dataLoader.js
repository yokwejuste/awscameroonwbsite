/**
 * Utility functions to load and manage community data from JSON files
 */

let cachedCommunities = null;
let cachedPartners = null;
let cachedSponsors = null;

/**
 * Fetch communities data from JSON file
 */
export async function fetchCommunities() {
  if (cachedCommunities) {
    return cachedCommunities;
  }

  try {
    const response = await fetch('/data/communities.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch communities: ${response.statusText}`);
    }
    const data = await response.json();
    cachedCommunities = data.communities;
    return cachedCommunities;
  } catch (error) {
    console.error('Error loading communities:', error);
    return [];
  }
}

/**
 * Fetch partners data from JSON file
 */
export async function fetchPartners() {
  if (cachedPartners) {
    return cachedPartners;
  }

  try {
    const response = await fetch('/data/partners.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch partners: ${response.statusText}`);
    }
    const data = await response.json();
    cachedPartners = data.partners;
    return cachedPartners;
  } catch (error) {
    console.error('Error loading partners:', error);
    return [];
  }
}

/**
 * Fetch sponsors data from JSON file
 */
export async function fetchSponsors() {
  if (cachedSponsors) {
    return cachedSponsors;
  }

  try {
    const response = await fetch('/data/sponsors.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch sponsors: ${response.statusText}`);
    }
    const data = await response.json();
    cachedSponsors = data.sponsors;
    return cachedSponsors;
  } catch (error) {
    console.error('Error loading sponsors:', error);
    return [];
  }
}

/**
 * Get count of communities
 * Returns the total number of clubs and user groups combined
 */
export async function getCommunitiesCount() {
  const communities = await fetchCommunities();
  return communities.length;
}

/**
 * Get count of partners
 */
export async function getPartnersCount() {
  const partners = await fetchPartners();
  return partners.length;
}

/**
 * Get count of sponsors
 */
export async function getSponsorsCount() {
  const sponsors = await fetchSponsors();
  return sponsors.length;
}

/**
 * Get community statistics
 * Returns counts for communities, members, and events
 */
export async function getStatistics() {
  const communitiesCount = await getCommunitiesCount();

  return {
    communities: communitiesCount,
    members: 2000, // Static value as per requirement
    events: 50     // Static value as per requirement
  };
}
