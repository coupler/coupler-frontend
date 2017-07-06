Gem::Specification.new do |s|
  s.name        = 'coupler-frontend'
  s.version     = '0.0.1'
  s.licenses    = ['MIT']
  s.summary     = 'Coupler frontend application'
  s.authors     = ['Jeremy Stephens']
  s.email       = 'jeremy.f.stephens@vanderbilt.edu'
  s.files       = `git ls-files -z`.split("\x0")

  s.add_dependency 'rake', '~> 12'
end
