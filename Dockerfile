FROM ruby:3.3.4

WORKDIR /app

ENV NODE_VERSION=22.x

COPY . .

RUN curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION | bash - \
		&& curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
		&& echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
		&& apt-get update \
		&& apt-get install -y \
		nodejs \
		postgresql-client \
		yarn \
		apt-transport-https \
		&& yarn install --check-files \
		&& bundle check || bundle install --jobs 4
