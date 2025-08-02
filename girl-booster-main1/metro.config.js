const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

// Adicionar suporte para mais tipos de assets
config.resolver.assetExts.push('png', 'jpg', 'jpeg', 'gif', 'webp');

module.exports = config;