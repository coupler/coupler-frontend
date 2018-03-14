Gem::Specification.new do |s|
  s.name          = 'coupler-frontend'
  s.version       = '0.0.1'
  s.licenses      = ['MIT']
  s.summary       = 'Coupler frontend application'
  s.authors       = ['Jeremy Stephens']
  s.email         = 'jeremy.f.stephens@vanderbilt.edu'
  s.files         = `git ls-files -z`.split("\x0")
  s.require_paths = ["lib"]

  s.add_dependency "rack", "~> 1.6.0"
end
