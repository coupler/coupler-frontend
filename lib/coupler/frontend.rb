require 'rack/file'
require 'rack/utils'

module Coupler
  class Frontend < Rack::File
    def initialize
      super(File.expand_path(File.join(File.dirname(__FILE__), '..', '..', 'dist')))
    end

    def call(env)
      path_info = Rack::Utils.unescape(env[Rack::PATH_INFO])
      path_info = Rack::Utils.clean_path_info(path_info)
      path_parts = path_info.split(Rack::Utils::PATH_SEPS)
      path_parts.shift if path_parts[0] == ""

      while !path_parts.empty?
        path = File.join(@root, *path_parts)

        available =
          begin
            File.file?(path) && File.readable?(path)
          rescue SystemCallError
            false
          end

        if available
          # found a file
          env[Rack::PATH_INFO] = path.sub(%r{^#{@root}}, "")
          return super(env)
        end

        path_parts.shift
      end

      # fall back to index
      env[Rack::PATH_INFO] = "/index.html"
      super(env)
    end
  end
end
